/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\nfunction _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\nvar Item = /*#__PURE__*/function () {\n  function Item(title, description, dueDate, priority) {\n    _classCallCheck(this, Item);\n    this.title = title;\n    this.description = description;\n    this.dueDate = dueDate;\n    this.priority = priority;\n    this.project = Project.currentProject.title;\n  }\n  return _createClass(Item, [{\n    key: \"view\",\n    value: function view() {\n      var _this = this;\n      var div = document.createElement('div');\n      var item = document.createElement('button');\n      item.classList.add('collapsible-item');\n      item.textContent = \"\".concat(this.title);\n      var itemContent = document.createElement('div');\n      itemContent.className = 'content';\n      var descriptionItem = document.createElement('p');\n      descriptionItem.textContent = this.description;\n      descriptionItem.className = 'item-description';\n      var dueDateItem = document.createElement('p');\n      dueDateItem.textContent = \"Due: \".concat(this.dueDate);\n      dueDateItem.className = 'item-due-date';\n      var priorityItem = document.createElement('p');\n      priorityItem.textContent = \"Priority: \".concat(this.priority);\n      priorityItem.className = 'item-priority';\n      var projectItem = document.createElement('p');\n      projectItem.textContent = \"Project: \".concat(this.project);\n      projectItem.className = 'item-project';\n      var deleteButton = document.createElement('button');\n      deleteButton.textContent = \"delete\";\n      deleteButton.addEventListener('click', function () {\n        var currentProject = Project.listOfProjects.find(function (project) {\n          return project.title === Project.currentProject;\n        });\n        var thisItemIndex = currentProject.items.findIndex(function (toBeFoundItem) {\n          return toBeFoundItem.title === _this.title;\n        });\n        currentProject.items.splice(thisItemIndex, 1);\n        page.loadPage();\n      });\n      deleteButton.className = \"delete\";\n      var checkBox = document.createElement('input');\n      checkBox.type = \"checkbox\";\n      item.addEventListener(\"click\", function () {\n        item.classList.toggle(\"active\");\n        var itemCont = item.nextElementSibling;\n        if (itemCont.style.display === \"block\") {\n          itemCont.style.display = \"none\";\n        } else {\n          itemCont.style.display = \"block\";\n        }\n      });\n      itemContent.appendChild(descriptionItem);\n      itemContent.appendChild(dueDateItem);\n      itemContent.appendChild(priorityItem);\n      itemContent.appendChild(projectItem);\n      itemContent.appendChild(deleteButton);\n      item.appendChild(checkBox);\n      div.appendChild(item);\n      div.appendChild(itemContent);\n      return div;\n    }\n  }]);\n}();\nvar Project = /*#__PURE__*/function () {\n  function Project(title) {\n    _classCallCheck(this, Project);\n    this.title = title;\n    this.items = [];\n    Project.listOfProjects.push(this);\n    Project.currentProject = this.title;\n  }\n  return _createClass(Project, [{\n    key: \"view\",\n    value: function view() {\n      var projectContent = document.createElement(\"div\");\n      this.items.forEach(function (item) {\n        projectContent.appendChild(item.view());\n      });\n      return projectContent;\n    }\n  }], [{\n    key: \"switchCurrent\",\n    value: function switchCurrent(title) {\n      Project.currentProject = title;\n    }\n  }]);\n}();\n_defineProperty(Project, \"listOfProjects\", []);\n_defineProperty(Project, \"currentProject\", undefined);\nvar general = new Project(\"general\");\nvar content = document.getElementById('listContent');\nfunction Page() {\n  function loadProjects() {\n    var projects = document.getElementById(\"selectProjects\");\n    projects.innerHTML = \"\";\n    Project.listOfProjects.forEach(function (project) {\n      var option = document.createElement(\"option\");\n      option.textContent = project.title;\n      if (project.title === Project.currentProject) {\n        option.selected = true;\n      }\n      projects.appendChild(option);\n    });\n  }\n  function loadItems() {\n    var currentProject = Project.listOfProjects.find(function (project) {\n      return project.title === Project.currentProject;\n    });\n    console.log(_typeof(currentProject));\n    content.append(currentProject.view());\n  }\n  function addItem(item) {\n    var currentProject = Project.listOfProjects.find(function (project) {\n      return project.title === Project.currentProject;\n    });\n    currentProject.items.push(item);\n  }\n  function initialiseItemForm() {\n    var itemForm = document.getElementById(\"form\");\n    itemForm.addEventListener('submit', function (event) {\n      event.preventDefault();\n      var formData = new FormData(itemForm);\n      var title = formData.get('title');\n      var description = formData.get('description');\n      var dueDate = formData.get('dueDate');\n      var priority = formData.get('priority');\n      var currentProject = Project.currentProject;\n      var item = new Item(title, description, dueDate, priority, currentProject);\n      addItem(item);\n      // const currentProject = Project.listOfProjects.find((project) => project.title === Project.currentProject)\n      itemForm.reset();\n      loadPage();\n    });\n  }\n  function changeHeader() {\n    content.innerHTML = \"\";\n    var header = document.createElement('h1');\n    header.textContent = Project.currentProject;\n    content.appendChild(header);\n  }\n  function checkValidity(checkTitle) {\n    var listOfProjectTitles = [];\n    Project.listOfProjects.forEach(function (project) {\n      listOfProjectTitles.push(project.title);\n    });\n    return listOfProjectTitles.includes(checkTitle);\n  }\n  function initialiseProjectForm() {\n    var projectForm = document.getElementById(\"projectForm\");\n    var titleInput = document.getElementById(\"projectTitle\");\n    titleInput.addEventListener('input', function () {\n      var inputtedTitle = titleInput.value.trim();\n      if (inputtedTitle === \"\") {\n        titleInput.setCustomValidity(\"\");\n      } else if (checkValidity(inputtedTitle)) {\n        titleInput.setCustomValidity(\"A project with this title already exists\");\n      } else {\n        titleInput.setCustomValidity(\"\");\n      }\n    });\n    projectForm.addEventListener('submit', function (event) {\n      event.preventDefault();\n      var formData = new FormData(projectForm);\n      var title = formData.get('projectTitle').trim();\n      if (title === \"\") {\n        titleInput.setCustomValidity(\"Project title is required\");\n        titleInput.reportValidity();\n        return;\n      }\n      if (checkValidity(title)) {\n        titleInput.setCustomValidity(\"A project with this title already exists\");\n        titleInput.reportValidity();\n        return;\n      }\n      titleInput.setCustomValidity(\"\");\n      var project = new Project(title);\n      projectForm.reset();\n      loadPage();\n    });\n  }\n  function loadSelectProject() {\n    var selectForm = document.getElementById('selectProjects');\n    selectForm.addEventListener('change', function (event) {\n      Project.switchCurrent(selectForm.value);\n      console.log(selectForm.value);\n      changeHeader();\n      loadItems();\n    });\n  }\n  function loadPage() {\n    changeHeader();\n    loadItems();\n    loadProjects();\n    loadSelectProject();\n    localStorage.setItem('listOfProjects', JSON.stringify(Project.listOfProjects));\n    localStorage.setItem('currentProject', Project.currentProject);\n  }\n  function initialise() {\n    initialiseProjectForm();\n    initialiseItemForm();\n    var savedProjects = JSON.parse(localStorage.getItem('listOfProjects'));\n    var savedCurrentProject = localStorage.getItem('currentProject');\n    if (savedProjects && savedProjects.length > 0) {\n      Project.listOfProjects = [];\n      savedProjects.forEach(function (projectData) {\n        var project = new Project(projectData.title);\n        Project.listOfProjects.pop();\n        project.items = projectData.items.map(function (itemData) {\n          var item = new Item(itemData.title, itemData.description, itemData.dueDate, itemData.priority);\n          return item;\n        });\n        Project.listOfProjects.push(project);\n      });\n      Project.currentProject = savedCurrentProject || Project.listOfProjects[0].title;\n    }\n  }\n  return {\n    loadPage: loadPage,\n    initialise: initialise\n  };\n}\nvar page = Page();\npage.initialise();\npage.loadPage();\n\n//# sourceURL=webpack://to-do/./src/index.js?\n}");

/***/ },

/***/ "./src/styles.css"
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://to-do/./src/styles.css?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;