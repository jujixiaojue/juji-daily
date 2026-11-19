(function () {
  "use strict";

  var TYPE_TAGS = {
    产品调研: true,
    使用教程: true,
    原理解析: true,
    技术方案: true,
  };

  var courses = window.JUJI_XUETANG_COURSES || [];
  var allTags = window.JUJI_XUETANG_ALL_TAGS || [];

  var state = {
    query: "",
    tag: "全部",
    sort: "latest",
    view: "card",
  };

  var els = {
    search: document.getElementById("search"),
    tagBar: document.getElementById("tag-bar"),
    sortBar: document.getElementById("sort-bar"),
    viewBar: document.getElementById("view-bar"),
    count: document.getElementById("result-count"),
    grid: document.getElementById("course-grid"),
    empty: document.getElementById("empty-state"),
    clearBtn: document.getElementById("clear-filters"),
  };

  function isTypeTag(tag) {
    return Boolean(TYPE_TAGS[tag]);
  }

  function matches(course) {
    if (state.tag !== "全部" && course.tags.indexOf(state.tag) === -1) {
      return false;
    }
    var q = state.query.trim().toLowerCase();
    if (!q) return true;
    var hay = (course.title + " " + course.summary + " " + course.tags.join(" ")).toLowerCase();
    return hay.indexOf(q) !== -1;
  }

  function sorted(list) {
    var copy = list.slice();
    if (state.sort === "latest") {
      copy.sort(function (a, b) {
        if (a.published === b.published) return a.order - b.order;
        return a.published < b.published ? 1 : -1;
      });
    } else {
      copy.sort(function (a, b) {
        return a.order - b.order;
      });
    }
    return copy;
  }

  function tagClass(tag) {
    return isTypeTag(tag) ? "tag" : "tag theme";
  }

  function renderTags() {
    var html = '<button type="button" class="chip' + (state.tag === "全部" ? " active" : "") + '" data-tag="全部">全部</button>';
    allTags.forEach(function (tag) {
      html +=
        '<button type="button" class="chip' +
        (state.tag === tag ? " active" : "") +
        '" data-tag="' +
        tag +
        '">' +
        tag +
        "</button>";
    });
    els.tagBar.innerHTML = html;
  }

  function renderCourses() {
    var filtered = sorted(courses.filter(matches));
    els.count.textContent = "共 " + filtered.length + " 门课";
    els.grid.className = "course-grid" + (state.view === "list" ? " list" : "");

    if (filtered.length === 0) {
      els.grid.innerHTML = "";
      els.empty.hidden = false;
      return;
    }

    els.empty.hidden = true;
    els.grid.innerHTML = filtered
      .map(function (c) {
        var tags = c.tags
          .map(function (t) {
            return '<span class="' + tagClass(t) + '">' + t + "</span>";
          })
          .join("");
        return (
          '<article class="course-card">' +
          '<div class="card-main">' +
          "<h2><a href=\"courses/" +
          c.id +
          '.html">' +
          c.title +
          "</a></h2>" +
          '<p class="summary">' +
          c.summary +
          "</p>" +
          '<div class="tags">' +
          tags +
          "</div>" +
          '<div class="pub-date">发布：' +
          c.published +
          "（UTC+8）</div>" +
          "</div>" +
          '<div class="card-side">' +
          '<a class="btn-read" href="courses/' +
          c.id +
          '.html">开始阅读</a>' +
          "</div>" +
          "</article>"
        );
      })
      .join("");
  }

  function syncControls() {
    Array.prototype.forEach.call(els.sortBar.querySelectorAll("[data-sort]"), function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-sort") === state.sort);
    });
    Array.prototype.forEach.call(els.viewBar.querySelectorAll("[data-view]"), function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-view") === state.view);
    });
  }

  function render() {
    renderTags();
    syncControls();
    renderCourses();
  }

  function clearFilters() {
    state.query = "";
    state.tag = "全部";
    state.sort = "latest";
    if (els.search) els.search.value = "";
    render();
  }

  if (els.search) {
    els.search.addEventListener("input", function () {
      state.query = els.search.value;
      renderCourses();
      renderTags();
    });
  }

  if (els.tagBar) {
    els.tagBar.addEventListener("click", function (e) {
      var btn = e.target.closest("[data-tag]");
      if (!btn) return;
      state.tag = btn.getAttribute("data-tag");
      render();
    });
  }

  if (els.sortBar) {
    els.sortBar.addEventListener("click", function (e) {
      var btn = e.target.closest("[data-sort]");
      if (!btn) return;
      state.sort = btn.getAttribute("data-sort");
      render();
    });
  }

  if (els.viewBar) {
    els.viewBar.addEventListener("click", function (e) {
      var btn = e.target.closest("[data-view]");
      if (!btn) return;
      state.view = btn.getAttribute("data-view");
      render();
    });
  }

  if (els.clearBtn) {
    els.clearBtn.addEventListener("click", clearFilters);
  }

  render();
})();
