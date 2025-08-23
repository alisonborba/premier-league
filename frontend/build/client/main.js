/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/globals.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/globals.css ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Reset and base styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f5f5f5;
  color: #333;
  line-height: 1.6;
}

.app {
  min-height: 100vh;
}

/* Loading states */
.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
}

.loading-container p {
  margin-top: 1rem;
  color: #666;
}

/* Error and info banners */
.error-banner,
.info-banner {
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.error-banner {
  background-color: #fee;
  border: 1px solid #fcc;
  color: #c33;
}

.info-banner {
  background-color: #e8f4fd;
  border: 1px solid #b3d9ff;
  color: #0066cc;
}

.info-banner--success {
  background-color: #e8f5e8;
  border: 1px solid #b3d9b3;
  color: #006600;
}

.info-banner--warning {
  background-color: #fff3cd;
  border: 1px solid #ffeaa7;
  color: #856404;
}

.error-content,
.info-content {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex: 1;
}

.error-actions,
.info-action-btn {
  display: flex;
  gap: 0.5rem;
}

.error-retry-btn,
.info-action-btn {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.875rem;
  transition: background-color 0.2s;
}

.error-retry-btn {
  background-color: #007bff;
  color: white;
}

.error-retry-btn:hover {
  background-color: #0056b3;
}

.info-action-btn {
  background-color: #28a745;
  color: white;
}

.info-action-btn:hover {
  background-color: #1e7e34;
}

.error-dismiss-btn {
  background: none;
  border: none;
  font-size: 1.25rem;
  cursor: pointer;
  color: inherit;
  padding: 0.25rem;
}

/* Empty states */
.empty-state {
  text-align: center;
  padding: 2rem;
  color: #666;
}

/* Spinner */
.spinner {
  display: inline-block;
  position: relative;
  width: 40px;
  height: 40px;
}

.spinner--small {
  width: 20px;
  height: 20px;
}

.spinner--large {
  width: 60px;
  height: 60px;
}

.spinner-ring {
  position: absolute;
  border: 3px solid transparent;
  border-top: 3px solid #007bff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.spinner-ring:nth-child(1) {
  width: 100%;
  height: 100%;
  animation-delay: 0s;
}

.spinner-ring:nth-child(2) {
  width: 80%;
  height: 80%;
  top: 10%;
  left: 10%;
  animation-delay: 0.1s;
}

.spinner-ring:nth-child(3) {
  width: 60%;
  height: 60%;
  top: 20%;
  left: 20%;
  animation-delay: 0.2s;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* League table styles */
.league-table-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
}

.table-header-section {
  margin-bottom: 2rem;
  text-align: center;
}

.table-title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #1a1a1a;
}

.table-stats {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.stat-item {
  background: white;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.table-wrapper {
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  overflow-x: auto;
}

.league-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.875rem;
}

.table-header {
  background-color: #f8f9fa;
  font-weight: 600;
  text-align: center;
  padding: 1rem 0.5rem;
  border-bottom: 2px solid #dee2e6;
}

.table-header--club {
  text-align: left;
}

.table-row {
  border-bottom: 1px solid #dee2e6;
  transition: background-color 0.2s;
}

.table-row:hover {
  background-color: #f8f9fa;
}

.table-row--champions-league {
  background-color: #e8f5e8;
}

.table-row--europa-league {
  background-color: #fff3cd;
}

.table-row--relegation {
  background-color: #f8d7da;
}

.table-cell {
  padding: 0.75rem 0.5rem;
  text-align: center;
  vertical-align: middle;
}

.table-cell--club {
  text-align: left;
}

.club-link {
  color: #007bff;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

.club-link:hover {
  color: #0056b3;
  text-decoration: underline;
}

/* Form pills */
.form-pills {
  display: flex;
  gap: 0.25rem;
  justify-content: center;
}

.form-pill {
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  text-align: center;
  line-height: 20px;
  font-size: 0.75rem;
  font-weight: bold;
  color: white;
}

.form-pill--win {
  background-color: #28a745;
}

.form-pill--draw {
  background-color: rgb(157, 155, 167);
  color: white;
}

.form-pill--loss {
  background-color: #dc3545;
}

/* Table legend */
.table-legend {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.legend-color {
  width: 16px;
  height: 16px;
  border-radius: 4px;
}

.legend-color--champions {
  background-color: #e8f5e8;
}

.legend-color--europa {
  background-color: #fff3cd;
}

.legend-color--relegation {
  background-color: #f8d7da;
}

/* Team page styles */
.team-page-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 1rem;
}

.team-header {
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  margin-bottom: 2rem;
  padding: 2rem;
}

.team-header-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.team-info {
  text-align: center;
}

.back-link {
  display: inline-block;
  margin-bottom: 1rem;
  color: #007bff;
  text-decoration: none;
  font-weight: 500;
}

.back-link:hover {
  text-decoration: underline;
}

.team-name {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: #1a1a1a;
}

.team-country {
  font-size: 1.125rem;
  color: #666;
  margin-bottom: 0.5rem;
}

.team-code {
  font-family: monospace;
  background: #f8f9fa;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  color: #666;
}

.team-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
}

.stat-card {
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 6px;
  text-align: center;
  border: 1px solid #dee2e6;
}

.stat-value {
  display: block;
  font-size: 1.5rem;
  font-weight: bold;
  color: #1a1a1a;
  margin-bottom: 0.25rem;
}

.stat-label {
  font-size: 0.875rem;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.stat-card--wins {
  border-color: #28a745;
  background-color: #e8f5e8;
}

.stat-card--draws {
  border-color: #ffc107;
  background-color: #fff3cd;
}

.stat-card--losses {
  border-color: #dc3545;
  background-color: #f8d7da;
}

.stat-card--points {
  border-color: #007bff;
  background-color: #e8f4fd;
}

/* Match list styles */
.match-list {
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  padding: 2rem;
}

.match-list-title {
  margin-bottom: 1.5rem;
  color: #1a1a1a;
  font-size: 1.5rem;
}

.matches-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.match-row {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-radius: 6px;
  border: 1px solid #dee2e6;
  transition: all 0.2s;
}

.match-row:hover {
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.match-row--win {
  background-color: #e8f5e8;
  border-color: #28a745;
}

.match-row--draw {
  background-color: #fff3cd;
  border-color: #ffc107;
}

.match-row--loss {
  background-color: #f8d7da;
  border-color: #dc3545;
}

.match-row--even {
  background-color: #f8f9fa;
}

.match-date {
  min-width: 100px;
  font-weight: 500;
  color: #666;
}

.match-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.match-venue {
  display: flex;
  justify-content: center;
}

.venue-indicator {
  display: inline-block;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  text-align: center;
  line-height: 24px;
  font-size: 0.75rem;
  font-weight: bold;
  color: white;
}

.venue-indicator--home {
  background-color: #007bff;
}

.venue-indicator--away {
  background-color: #6c757d;
}

.match-teams {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-weight: 500;
}

.match-score {
  font-weight: bold;
  font-size: 1.125rem;
  color: #1a1a1a;
}

.match-competition {
  text-align: center;
  font-size: 0.875rem;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Error fallback */
.error-fallback {
  text-align: center;
  padding: 2rem;
  color: #666;
}

.not-found {
  text-align: center;
  padding: 2rem;
}

.not-found h1 {
  margin-bottom: 1rem;
  color: #1a1a1a;
}

/* Responsive design */
@media (max-width: 768px) {
  .table-stats {
    flex-direction: column;
    gap: 1rem;
  }
  
  .team-stats {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .match-row {
    flex-direction: column;
    text-align: center;
  }
  
  .match-date {
    min-width: auto;
  }
  
  .legend-item {
    font-size: 0.875rem;
  }
}

@media (max-width: 480px) {
  .league-table-container,
  .team-page-container {
    padding: 0.5rem;
  }
  
  .table-title {
    font-size: 2rem;
  }
  
  .team-name {
    font-size: 2rem;
  }
  
  .team-stats {
    grid-template-columns: 1fr;
  }
}
`, "",{"version":3,"sources":["webpack://./src/styles/globals.css"],"names":[],"mappings":"AAAA,0BAA0B;AAC1B;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE;;cAEY;EACZ,mCAAmC;EACnC,kCAAkC;EAClC,yBAAyB;EACzB,WAAW;EACX,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;AACnB;;AAEA,mBAAmB;AACnB;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,WAAW;AACb;;AAEA,2BAA2B;AAC3B;;EAEE,aAAa;EACb,cAAc;EACd,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,sBAAsB;EACtB,sBAAsB;EACtB,WAAW;AACb;;AAEA;EACE,yBAAyB;EACzB,yBAAyB;EACzB,cAAc;AAChB;;AAEA;EACE,yBAAyB;EACzB,yBAAyB;EACzB,cAAc;AAChB;;AAEA;EACE,yBAAyB;EACzB,yBAAyB;EACzB,cAAc;AAChB;;AAEA;;EAEE,aAAa;EACb,mBAAmB;EACnB,WAAW;EACX,OAAO;AACT;;AAEA;;EAEE,aAAa;EACb,WAAW;AACb;;AAEA;;EAEE,oBAAoB;EACpB,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,mBAAmB;EACnB,iCAAiC;AACnC;;AAEA;EACE,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,cAAc;EACd,gBAAgB;AAClB;;AAEA,iBAAiB;AACjB;EACE,kBAAkB;EAClB,aAAa;EACb,WAAW;AACb;;AAEA,YAAY;AACZ;EACE,qBAAqB;EACrB,kBAAkB;EAClB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,6BAA6B;EAC7B,6BAA6B;EAC7B,kBAAkB;EAClB,kCAAkC;AACpC;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,UAAU;EACV,WAAW;EACX,QAAQ;EACR,SAAS;EACT,qBAAqB;AACvB;;AAEA;EACE,UAAU;EACV,WAAW;EACX,QAAQ;EACR,SAAS;EACT,qBAAqB;AACvB;;AAEA;EACE,KAAK,uBAAuB,EAAE;EAC9B,OAAO,yBAAyB,EAAE;AACpC;;AAEA,wBAAwB;AACxB;EACE,iBAAiB;EACjB,cAAc;EACd,aAAa;AACf;;AAEA;EACE,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,SAAS;EACT,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,oBAAoB;EACpB,kBAAkB;EAClB,qCAAqC;AACvC;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,qCAAqC;EACrC,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,yBAAyB;EACzB,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;EACzB,gBAAgB;EAChB,kBAAkB;EAClB,oBAAoB;EACpB,gCAAgC;AAClC;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gCAAgC;EAChC,iCAAiC;AACnC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,uBAAuB;EACvB,kBAAkB;EAClB,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,cAAc;EACd,qBAAqB;EACrB,gBAAgB;EAChB,sBAAsB;AACxB;;AAEA;EACE,cAAc;EACd,0BAA0B;AAC5B;;AAEA,eAAe;AACf;EACE,aAAa;EACb,YAAY;EACZ,uBAAuB;AACzB;;AAEA;EACE,qBAAqB;EACrB,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;EAClB,iBAAiB;EACjB,kBAAkB;EAClB,iBAAiB;EACjB,YAAY;AACd;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;EACpC,YAAY;AACd;;AAEA;EACE,yBAAyB;AAC3B;;AAEA,iBAAiB;AACjB;EACE,gBAAgB;EAChB,aAAa;EACb,uBAAuB;EACvB,SAAS;EACT,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA,qBAAqB;AACrB;EACE,iBAAiB;EACjB,cAAc;EACd,aAAa;AACf;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,qCAAqC;EACrC,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;EACrB,mBAAmB;EACnB,cAAc;EACd,qBAAqB;EACrB,gBAAgB;AAClB;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,iBAAiB;EACjB,qBAAqB;EACrB,cAAc;AAChB;;AAEA;EACE,mBAAmB;EACnB,WAAW;EACX,qBAAqB;AACvB;;AAEA;EACE,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,2DAA2D;EAC3D,SAAS;AACX;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,kBAAkB;EAClB,kBAAkB;EAClB,yBAAyB;AAC3B;;AAEA;EACE,cAAc;EACd,iBAAiB;EACjB,iBAAiB;EACjB,cAAc;EACd,sBAAsB;AACxB;;AAEA;EACE,mBAAmB;EACnB,WAAW;EACX,yBAAyB;EACzB,qBAAqB;AACvB;;AAEA;EACE,qBAAqB;EACrB,yBAAyB;AAC3B;;AAEA;EACE,qBAAqB;EACrB,yBAAyB;AAC3B;;AAEA;EACE,qBAAqB;EACrB,yBAAyB;AAC3B;;AAEA;EACE,qBAAqB;EACrB,yBAAyB;AAC3B;;AAEA,sBAAsB;AACtB;EACE,iBAAiB;EACjB,kBAAkB;EAClB,qCAAqC;EACrC,aAAa;AACf;;AAEA;EACE,qBAAqB;EACrB,cAAc;EACd,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,aAAa;EACb,kBAAkB;EAClB,yBAAyB;EACzB,oBAAoB;AACtB;;AAEA;EACE,qCAAqC;AACvC;;AAEA;EACE,yBAAyB;EACzB,qBAAqB;AACvB;;AAEA;EACE,yBAAyB;EACzB,qBAAqB;AACvB;;AAEA;EACE,yBAAyB;EACzB,qBAAqB;AACvB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;EAChB,WAAW;AACb;;AAEA;EACE,OAAO;EACP,aAAa;EACb,sBAAsB;EACtB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,qBAAqB;EACrB,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;EAClB,iBAAiB;EACjB,kBAAkB;EAClB,iBAAiB;EACjB,YAAY;AACd;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;EACT,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;EACnB,WAAW;EACX,yBAAyB;EACzB,qBAAqB;AACvB;;AAEA,mBAAmB;AACnB;EACE,kBAAkB;EAClB,aAAa;EACb,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,aAAa;AACf;;AAEA;EACE,mBAAmB;EACnB,cAAc;AAChB;;AAEA,sBAAsB;AACtB;EACE;IACE,sBAAsB;IACtB,SAAS;EACX;;EAEA;IACE,qCAAqC;EACvC;;EAEA;IACE,sBAAsB;IACtB,kBAAkB;EACpB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,mBAAmB;EACrB;AACF;;AAEA;EACE;;IAEE,eAAe;EACjB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,0BAA0B;EAC5B;AACF","sourcesContent":["/* Reset and base styles */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  background-color: #f5f5f5;\n  color: #333;\n  line-height: 1.6;\n}\n\n.app {\n  min-height: 100vh;\n}\n\n/* Loading states */\n.loading-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n  text-align: center;\n}\n\n.loading-container p {\n  margin-top: 1rem;\n  color: #666;\n}\n\n/* Error and info banners */\n.error-banner,\n.info-banner {\n  padding: 1rem;\n  margin: 1rem 0;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.error-banner {\n  background-color: #fee;\n  border: 1px solid #fcc;\n  color: #c33;\n}\n\n.info-banner {\n  background-color: #e8f4fd;\n  border: 1px solid #b3d9ff;\n  color: #0066cc;\n}\n\n.info-banner--success {\n  background-color: #e8f5e8;\n  border: 1px solid #b3d9b3;\n  color: #006600;\n}\n\n.info-banner--warning {\n  background-color: #fff3cd;\n  border: 1px solid #ffeaa7;\n  color: #856404;\n}\n\n.error-content,\n.info-content {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  flex: 1;\n}\n\n.error-actions,\n.info-action-btn {\n  display: flex;\n  gap: 0.5rem;\n}\n\n.error-retry-btn,\n.info-action-btn {\n  padding: 0.5rem 1rem;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 0.875rem;\n  transition: background-color 0.2s;\n}\n\n.error-retry-btn {\n  background-color: #007bff;\n  color: white;\n}\n\n.error-retry-btn:hover {\n  background-color: #0056b3;\n}\n\n.info-action-btn {\n  background-color: #28a745;\n  color: white;\n}\n\n.info-action-btn:hover {\n  background-color: #1e7e34;\n}\n\n.error-dismiss-btn {\n  background: none;\n  border: none;\n  font-size: 1.25rem;\n  cursor: pointer;\n  color: inherit;\n  padding: 0.25rem;\n}\n\n/* Empty states */\n.empty-state {\n  text-align: center;\n  padding: 2rem;\n  color: #666;\n}\n\n/* Spinner */\n.spinner {\n  display: inline-block;\n  position: relative;\n  width: 40px;\n  height: 40px;\n}\n\n.spinner--small {\n  width: 20px;\n  height: 20px;\n}\n\n.spinner--large {\n  width: 60px;\n  height: 60px;\n}\n\n.spinner-ring {\n  position: absolute;\n  border: 3px solid transparent;\n  border-top: 3px solid #007bff;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n\n.spinner-ring:nth-child(1) {\n  width: 100%;\n  height: 100%;\n  animation-delay: 0s;\n}\n\n.spinner-ring:nth-child(2) {\n  width: 80%;\n  height: 80%;\n  top: 10%;\n  left: 10%;\n  animation-delay: 0.1s;\n}\n\n.spinner-ring:nth-child(3) {\n  width: 60%;\n  height: 60%;\n  top: 20%;\n  left: 20%;\n  animation-delay: 0.2s;\n}\n\n@keyframes spin {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}\n\n/* League table styles */\n.league-table-container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 1rem;\n}\n\n.table-header-section {\n  margin-bottom: 2rem;\n  text-align: center;\n}\n\n.table-title {\n  font-size: 2.5rem;\n  margin-bottom: 1rem;\n  color: #1a1a1a;\n}\n\n.table-stats {\n  display: flex;\n  justify-content: center;\n  gap: 2rem;\n  flex-wrap: wrap;\n}\n\n.stat-item {\n  background: white;\n  padding: 0.5rem 1rem;\n  border-radius: 6px;\n  box-shadow: 0 2px 4px rgba(0,0,0,0.1);\n}\n\n.table-wrapper {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 4px 6px rgba(0,0,0,0.1);\n  overflow-x: auto;\n}\n\n.league-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.875rem;\n}\n\n.table-header {\n  background-color: #f8f9fa;\n  font-weight: 600;\n  text-align: center;\n  padding: 1rem 0.5rem;\n  border-bottom: 2px solid #dee2e6;\n}\n\n.table-header--club {\n  text-align: left;\n}\n\n.table-row {\n  border-bottom: 1px solid #dee2e6;\n  transition: background-color 0.2s;\n}\n\n.table-row:hover {\n  background-color: #f8f9fa;\n}\n\n.table-row--champions-league {\n  background-color: #e8f5e8;\n}\n\n.table-row--europa-league {\n  background-color: #fff3cd;\n}\n\n.table-row--relegation {\n  background-color: #f8d7da;\n}\n\n.table-cell {\n  padding: 0.75rem 0.5rem;\n  text-align: center;\n  vertical-align: middle;\n}\n\n.table-cell--club {\n  text-align: left;\n}\n\n.club-link {\n  color: #007bff;\n  text-decoration: none;\n  font-weight: 500;\n  transition: color 0.2s;\n}\n\n.club-link:hover {\n  color: #0056b3;\n  text-decoration: underline;\n}\n\n/* Form pills */\n.form-pills {\n  display: flex;\n  gap: 0.25rem;\n  justify-content: center;\n}\n\n.form-pill {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  text-align: center;\n  line-height: 20px;\n  font-size: 0.75rem;\n  font-weight: bold;\n  color: white;\n}\n\n.form-pill--win {\n  background-color: #28a745;\n}\n\n.form-pill--draw {\n  background-color: rgb(157, 155, 167);\n  color: white;\n}\n\n.form-pill--loss {\n  background-color: #dc3545;\n}\n\n/* Table legend */\n.table-legend {\n  margin-top: 2rem;\n  display: flex;\n  justify-content: center;\n  gap: 2rem;\n  flex-wrap: wrap;\n}\n\n.legend-item {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.legend-color {\n  width: 16px;\n  height: 16px;\n  border-radius: 4px;\n}\n\n.legend-color--champions {\n  background-color: #e8f5e8;\n}\n\n.legend-color--europa {\n  background-color: #fff3cd;\n}\n\n.legend-color--relegation {\n  background-color: #f8d7da;\n}\n\n/* Team page styles */\n.team-page-container {\n  max-width: 1000px;\n  margin: 0 auto;\n  padding: 1rem;\n}\n\n.team-header {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 4px 6px rgba(0,0,0,0.1);\n  margin-bottom: 2rem;\n  padding: 2rem;\n}\n\n.team-header-content {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n\n.team-info {\n  text-align: center;\n}\n\n.back-link {\n  display: inline-block;\n  margin-bottom: 1rem;\n  color: #007bff;\n  text-decoration: none;\n  font-weight: 500;\n}\n\n.back-link:hover {\n  text-decoration: underline;\n}\n\n.team-name {\n  font-size: 2.5rem;\n  margin-bottom: 0.5rem;\n  color: #1a1a1a;\n}\n\n.team-country {\n  font-size: 1.125rem;\n  color: #666;\n  margin-bottom: 0.5rem;\n}\n\n.team-code {\n  font-family: monospace;\n  background: #f8f9fa;\n  padding: 0.25rem 0.5rem;\n  border-radius: 4px;\n  color: #666;\n}\n\n.team-stats {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));\n  gap: 1rem;\n}\n\n.stat-card {\n  background: #f8f9fa;\n  padding: 1rem;\n  border-radius: 6px;\n  text-align: center;\n  border: 1px solid #dee2e6;\n}\n\n.stat-value {\n  display: block;\n  font-size: 1.5rem;\n  font-weight: bold;\n  color: #1a1a1a;\n  margin-bottom: 0.25rem;\n}\n\n.stat-label {\n  font-size: 0.875rem;\n  color: #666;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n\n.stat-card--wins {\n  border-color: #28a745;\n  background-color: #e8f5e8;\n}\n\n.stat-card--draws {\n  border-color: #ffc107;\n  background-color: #fff3cd;\n}\n\n.stat-card--losses {\n  border-color: #dc3545;\n  background-color: #f8d7da;\n}\n\n.stat-card--points {\n  border-color: #007bff;\n  background-color: #e8f4fd;\n}\n\n/* Match list styles */\n.match-list {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 4px 6px rgba(0,0,0,0.1);\n  padding: 2rem;\n}\n\n.match-list-title {\n  margin-bottom: 1.5rem;\n  color: #1a1a1a;\n  font-size: 1.5rem;\n}\n\n.matches-container {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.match-row {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1rem;\n  border-radius: 6px;\n  border: 1px solid #dee2e6;\n  transition: all 0.2s;\n}\n\n.match-row:hover {\n  box-shadow: 0 2px 4px rgba(0,0,0,0.1);\n}\n\n.match-row--win {\n  background-color: #e8f5e8;\n  border-color: #28a745;\n}\n\n.match-row--draw {\n  background-color: #fff3cd;\n  border-color: #ffc107;\n}\n\n.match-row--loss {\n  background-color: #f8d7da;\n  border-color: #dc3545;\n}\n\n.match-row--even {\n  background-color: #f8f9fa;\n}\n\n.match-date {\n  min-width: 100px;\n  font-weight: 500;\n  color: #666;\n}\n\n.match-info {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n\n.match-venue {\n  display: flex;\n  justify-content: center;\n}\n\n.venue-indicator {\n  display: inline-block;\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  text-align: center;\n  line-height: 24px;\n  font-size: 0.75rem;\n  font-weight: bold;\n  color: white;\n}\n\n.venue-indicator--home {\n  background-color: #007bff;\n}\n\n.venue-indicator--away {\n  background-color: #6c757d;\n}\n\n.match-teams {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  font-weight: 500;\n}\n\n.match-score {\n  font-weight: bold;\n  font-size: 1.125rem;\n  color: #1a1a1a;\n}\n\n.match-competition {\n  text-align: center;\n  font-size: 0.875rem;\n  color: #666;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n\n/* Error fallback */\n.error-fallback {\n  text-align: center;\n  padding: 2rem;\n  color: #666;\n}\n\n.not-found {\n  text-align: center;\n  padding: 2rem;\n}\n\n.not-found h1 {\n  margin-bottom: 1rem;\n  color: #1a1a1a;\n}\n\n/* Responsive design */\n@media (max-width: 768px) {\n  .table-stats {\n    flex-direction: column;\n    gap: 1rem;\n  }\n  \n  .team-stats {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  \n  .match-row {\n    flex-direction: column;\n    text-align: center;\n  }\n  \n  .match-date {\n    min-width: auto;\n  }\n  \n  .legend-item {\n    font-size: 0.875rem;\n  }\n}\n\n@media (max-width: 480px) {\n  .league-table-container,\n  .team-page-container {\n    padding: 0.5rem;\n  }\n  \n  .table-title {\n    font-size: 2rem;\n  }\n  \n  .team-name {\n    font-size: 2rem;\n  }\n  \n  .team-stats {\n    grid-template-columns: 1fr;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   App: () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_providers_QueryProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/providers/QueryProvider */ "./src/app/providers/QueryProvider.tsx");
/* harmony import */ var _app_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/router */ "./src/app/router.tsx");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/globals.css */ "./src/styles/globals.css");
var _jsxFileName = "/app/src/App.tsx",
  _this = undefined;
/** @format */





var App = function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_app_providers_QueryProvider__WEBPACK_IMPORTED_MODULE_1__.QueryProvider, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "app",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_app_router__WEBPACK_IMPORTED_MODULE_2__.AppRouter, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  })));
};

/***/ }),

/***/ "./src/app/providers/QueryProvider.tsx":
/*!*********************************************!*\
  !*** ./src/app/providers/QueryProvider.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QueryProvider: () => (/* binding */ QueryProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tanstack/react-query */ "./node_modules/@tanstack/query-core/build/modern/queryClient.js");
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tanstack/react-query */ "./node_modules/@tanstack/react-query/build/legacy/QueryClientProvider.js");
var _jsxFileName = "/app/src/app/providers/QueryProvider.tsx",
  _this = undefined;


var queryClient = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      retryDelay: function retryDelay(attemptIndex) {
        return Math.min(1000 * Math.pow(2, attemptIndex), 30000);
      },
      staleTime: 5 * 60 * 1000,
      // 5 minutes
      refetchOnWindowFocus: false
    }
  }
});
var QueryProvider = function QueryProvider(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.QueryClientProvider, {
    client: queryClient,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, children);
};

/***/ }),

/***/ "./src/app/router.tsx":
/*!****************************!*\
  !*** ./src/app/router.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRouter: () => (/* binding */ AppRouter)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-UH6JLGW7.mjs");
/* harmony import */ var _components_LeagueTable_LeagueTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/LeagueTable/LeagueTable */ "./src/components/LeagueTable/LeagueTable.tsx");
/* harmony import */ var _components_Team_TeamPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Team/TeamPage */ "./src/components/Team/TeamPage.tsx");
var _jsxFileName = "/app/src/app/router.tsx",
  _this = undefined;




var AppRouter = function AppRouter() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.BrowserRouter, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Routes, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_LeagueTable_LeagueTable__WEBPACK_IMPORTED_MODULE_2__.LeagueTable, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 34
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {
    path: "/team/:code",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Team_TeamPage__WEBPACK_IMPORTED_MODULE_3__.TeamPage, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 44
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {
    path: "*",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Navigate, {
      to: "/",
      replace: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 34
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  })));
};

/***/ }),

/***/ "./src/components/LeagueTable/FormPills.tsx":
/*!**************************************************!*\
  !*** ./src/components/LeagueTable/FormPills.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormPills: () => (/* binding */ FormPills)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/app/src/components/LeagueTable/FormPills.tsx",
  _this = undefined;
/** @format */


var FormPills = function FormPills(_ref) {
  var form = _ref.form,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className;
  var getResultClass = function getResultClass(result) {
    switch (result) {
      case 'W':
        return 'form-pill--win';
      case 'D':
        return 'form-pill--draw';
      case 'L':
        return 'form-pill--loss';
      default:
        return '';
    }
  };
  var getResultLabel = function getResultLabel(result) {
    switch (result) {
      case 'W':
        return 'Win';
      case 'D':
        return 'Draw';
      case 'L':
        return 'Loss';
      default:
        return '';
    }
  };
  var getResult = function getResult(result) {
    switch (result) {
      case 'W':
        return '✓';
      case 'D':
        return '-';
      case 'L':
        return 'x';
      default:
        return '';
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-pills ".concat(className).trim(),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 5
    }
  }, form.map(function (result, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      key: index,
      className: "form-pill ".concat(getResultClass(result)),
      title: getResultLabel(result),
      "aria-label": "".concat(getResultLabel(result), " in match ").concat(index + 1),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }
    }, getResult(result));
  }));
};

/***/ }),

/***/ "./src/components/LeagueTable/LeagueRow.tsx":
/*!**************************************************!*\
  !*** ./src/components/LeagueTable/LeagueRow.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LeagueRow: () => (/* binding */ LeagueRow)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-UH6JLGW7.mjs");
/* harmony import */ var _FormPills__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormPills */ "./src/components/LeagueTable/FormPills.tsx");
/* harmony import */ var _lib_format__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/format */ "./src/lib/format.ts");
var _jsxFileName = "/app/src/components/LeagueTable/LeagueRow.tsx",
  _this = undefined;




var LeagueRow = function LeagueRow(_ref) {
  var row = _ref.row,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className;
  var getPositionClass = function getPositionClass(position) {
    if (position <= 4) return 'table-row--champions-league';
    if (position <= 6) return 'table-row--europa-league';
    if (position >= 18) return 'table-row--relegation';
    return '';
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
    className: "table-row ".concat(getPositionClass(row.position), " ").concat(className).trim(),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    className: "table-cell table-cell--position",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, row.position), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    className: "table-cell table-cell--club",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/team/".concat(row.code),
    className: "club-link",
    "aria-label": "View ".concat(row.name, " history"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, row.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    className: "table-cell table-cell--played",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, row.played), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    className: "table-cell table-cell--wins",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, row.wins), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    className: "table-cell table-cell--draws",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, row.draws), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    className: "table-cell table-cell--losses",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, row.losses), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    className: "table-cell table-cell--goals-for",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, row.gf), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    className: "table-cell table-cell--goals-against",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, row.ga), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    className: "table-cell table-cell--goal-difference",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, (0,_lib_format__WEBPACK_IMPORTED_MODULE_3__.formatGoalDifference)(row.gd)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    className: "table-cell table-cell--points",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, row.points)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    className: "table-cell table-cell--form",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FormPills__WEBPACK_IMPORTED_MODULE_2__.FormPills, {
    form: row.form,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  })));
};

/***/ }),

/***/ "./src/components/LeagueTable/LeagueTable.tsx":
/*!****************************************************!*\
  !*** ./src/components/LeagueTable/LeagueTable.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LeagueTable: () => (/* binding */ LeagueTable)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TableHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TableHeader */ "./src/components/LeagueTable/TableHeader.tsx");
/* harmony import */ var _LeagueRow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LeagueRow */ "./src/components/LeagueTable/LeagueRow.tsx");
/* harmony import */ var _UI_Spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../UI/Spinner */ "./src/components/UI/Spinner.tsx");
/* harmony import */ var _UI_ErrorBanner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../UI/ErrorBanner */ "./src/components/UI/ErrorBanner.tsx");
/* harmony import */ var _UI_InfoBanner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../UI/InfoBanner */ "./src/components/UI/InfoBanner.tsx");
/* harmony import */ var _hooks_useStandings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/useStandings */ "./src/hooks/useStandings.ts");
/* harmony import */ var _hooks_useWebSocketMatches__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/useWebSocketMatches */ "./src/hooks/useWebSocketMatches.ts");
/* harmony import */ var _hooks_useClubs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/useClubs */ "./src/hooks/useClubs.ts");
var _jsxFileName = "/app/src/components/LeagueTable/LeagueTable.tsx",
  _this = undefined;









var LeagueTable = function LeagueTable() {
  var _useWebSocketMatches = (0,_hooks_useWebSocketMatches__WEBPACK_IMPORTED_MODULE_7__.useWebSocketMatches)(),
    matches = _useWebSocketMatches.matches,
    seasonFinished = _useWebSocketMatches.seasonFinished,
    error = _useWebSocketMatches.error,
    status = _useWebSocketMatches.status,
    reconnect = _useWebSocketMatches.reconnect;
  var _useClubsMap = (0,_hooks_useClubs__WEBPACK_IMPORTED_MODULE_8__.useClubsMap)(),
    clubsMap = _useClubsMap.clubsMap,
    clubsLoading = _useClubsMap.isLoading,
    clubsError = _useClubsMap.error;
  var _useStandings = (0,_hooks_useStandings__WEBPACK_IMPORTED_MODULE_6__.useStandings)(matches, clubsMap),
    tableRows = _useStandings.tableRows,
    totalMatches = _useStandings.totalMatches,
    lastUpdate = _useStandings.lastUpdate;
  var isLoading = clubsLoading && tableRows.length === 0;
  var hasError = error || clubsError;
  if (isLoading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "league-table-container",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "loading-container",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_UI_Spinner__WEBPACK_IMPORTED_MODULE_3__.Spinner, {
      size: "large",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 11
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 11
      }
    }, "Loading Premier League data...")));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "league-table-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", {
    className: "table-header-section",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "table-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, "Premier League 2019/2020"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "table-stats",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "stat-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, "Matches:"), " ", totalMatches), lastUpdate && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "stat-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 15
    }
  }, "Last update:"), " ", lastUpdate.toLocaleTimeString()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "stat-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, "WS Status:"), " ", status))), seasonFinished && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_UI_InfoBanner__WEBPACK_IMPORTED_MODULE_5__.InfoBanner, {
    message: "The 2019/2020 season has finished!",
    type: "success",
    actionLabel: "View Final Table",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_UI_ErrorBanner__WEBPACK_IMPORTED_MODULE_4__.ErrorBanner, {
    error: hasError,
    onRetry: reconnect,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "table-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "league-table",
    role: "table",
    "aria-label": "Premier League standings table",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TableHeader__WEBPACK_IMPORTED_MODULE_1__.TableHeader, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
    }
  }, tableRows.map(function (row) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_LeagueRow__WEBPACK_IMPORTED_MODULE_2__.LeagueRow, {
      key: row.code,
      row: row,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 15
      }
    });
  })))), !isLoading && tableRows.length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "empty-state",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 11
    }
  }, "No matches found. Waiting for WebSocket data...")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "table-legend",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "legend-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "legend-color legend-color--champions",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 11
    }
  }, "Champions League (1st-4th)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "legend-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "legend-color legend-color--europa",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 11
    }
  }, "Europa League (5th-6th)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "legend-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "legend-color legend-color--relegation",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 11
    }
  }, "Relegation (18th-20th)"))));
};

/***/ }),

/***/ "./src/components/LeagueTable/TableHeader.tsx":
/*!****************************************************!*\
  !*** ./src/components/LeagueTable/TableHeader.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TableHeader: () => (/* binding */ TableHeader)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/app/src/components/LeagueTable/TableHeader.tsx",
  _this = undefined;

var TableHeader = function TableHeader() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    scope: "col",
    className: "table-header table-header--position",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, "Pos"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    scope: "col",
    className: "table-header table-header--club",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, "Club"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    scope: "col",
    className: "table-header table-header--played",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, "P"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    scope: "col",
    className: "table-header table-header--wins",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, "W"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    scope: "col",
    className: "table-header table-header--draws",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, "D"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    scope: "col",
    className: "table-header table-header--losses",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, "L"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    scope: "col",
    className: "table-header table-header--goals-for",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, "GF"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    scope: "col",
    className: "table-header table-header--goals-against",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, "GA"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    scope: "col",
    className: "table-header table-header--goal-difference",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, "GD"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    scope: "col",
    className: "table-header table-header--points",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, "Pts"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    scope: "col",
    className: "table-header table-header--form",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, "Form")));
};

/***/ }),

/***/ "./src/components/Team/MatchList.tsx":
/*!*******************************************!*\
  !*** ./src/components/Team/MatchList.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MatchList: () => (/* binding */ MatchList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MatchRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MatchRow */ "./src/components/Team/MatchRow.tsx");
/* harmony import */ var _UI_Spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UI/Spinner */ "./src/components/UI/Spinner.tsx");
var _jsxFileName = "/app/src/components/Team/MatchList.tsx",
  _this = undefined;



var MatchList = function MatchList(_ref) {
  var matches = _ref.matches,
    teamCode = _ref.teamCode,
    _ref$isLoading = _ref.isLoading,
    isLoading = _ref$isLoading === void 0 ? false : _ref$isLoading,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className;
  if (isLoading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "match-list ".concat(className).trim(),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "loading-container",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_UI_Spinner__WEBPACK_IMPORTED_MODULE_2__.Spinner, {
      size: "medium",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 11
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 11
      }
    }, "Loading matches...")));
  }
  if (matches.length === 0) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "match-list ".concat(className).trim(),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "empty-state",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 11
      }
    }, "No matches found for this team.")));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "match-list ".concat(className).trim(),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "match-list-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, "Match History"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "matches-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, matches.map(function (match, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MatchRow__WEBPACK_IMPORTED_MODULE_1__.MatchRow, {
      key: "".concat(match.date, "-").concat(match.home, "-").concat(match.away),
      match: match,
      teamCode: teamCode,
      className: index % 2 === 0 ? 'match-row--even' : 'match-row--odd',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 11
      }
    });
  })));
};

/***/ }),

/***/ "./src/components/Team/MatchRow.tsx":
/*!******************************************!*\
  !*** ./src/components/Team/MatchRow.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MatchRow: () => (/* binding */ MatchRow)
/* harmony export */ });
/* harmony import */ var _app_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/format */ "./src/lib/format.ts");

var _jsxFileName = "/app/src/components/Team/MatchRow.tsx",
  _this = undefined;


var MatchRow = function MatchRow(_ref) {
  var match = _ref.match,
    teamCode = _ref.teamCode,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className;
  var isHome = match.home === teamCode;
  var _match$score = (0,_app_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(match.score, 2),
    homeGoals = _match$score[0],
    awayGoals = _match$score[1];

  // Determines result for the team
  var getResult = function getResult() {
    if (isHome) {
      if (homeGoals > awayGoals) return 'win';
      if (homeGoals < awayGoals) return 'loss';
      return 'draw';
    } else {
      if (awayGoals > homeGoals) return 'win';
      if (awayGoals < homeGoals) return 'loss';
      return 'draw';
    }
  };
  var result = getResult();
  var opponentCode = isHome ? match.away : match.home;
  var opponentName = opponentCode; // Will be enriched by hook

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "match-row match-row--".concat(result, " ").concat(className).trim(),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "match-date",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, (0,_lib_format__WEBPACK_IMPORTED_MODULE_2__.formatDate)(match.date)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "match-info",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "match-venue",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
    className: "venue-indicator venue-indicator--".concat(isHome ? 'home' : 'away'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }, isHome ? 'H' : 'A')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "match-teams",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
    className: "team-name team-name--current",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }, isHome ? 'Us' : opponentName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
    className: "match-score",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }, (0,_lib_format__WEBPACK_IMPORTED_MODULE_2__.formatScore)(match.score)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
    className: "team-name team-name--opponent",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, isHome ? opponentName : 'Us')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "match-competition",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, match.competition || 'Premier League')));
};

/***/ }),

/***/ "./src/components/Team/TeamHeader.tsx":
/*!********************************************!*\
  !*** ./src/components/Team/TeamHeader.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TeamHeader: () => (/* binding */ TeamHeader)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-UH6JLGW7.mjs");
/* harmony import */ var _lib_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/format */ "./src/lib/format.ts");
var _jsxFileName = "/app/src/components/Team/TeamHeader.tsx",
  _this = undefined;



var TeamHeader = function TeamHeader(_ref) {
  var teamHistory = _ref.teamHistory,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className;
  var club = teamHistory.club,
    summary = teamHistory.summary;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", {
    className: "team-header ".concat(className).trim(),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "team-header-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "team-info",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/",
    className: "back-link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, "\u2190 Back to Table"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "team-name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, club.name), club.country && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "team-country",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, club.country), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "team-code",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, "Code: ", club.code)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "team-stats",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "stat-card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "stat-value",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, summary.played), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "stat-label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, "Played")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "stat-card stat-card--wins",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "stat-value",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, summary.wins), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "stat-label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, "Wins")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "stat-card stat-card--draws",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "stat-value",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, summary.draws), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "stat-label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, "Draws")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "stat-card stat-card--losses",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "stat-value",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, summary.losses), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "stat-label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, "Losses")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "stat-card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "stat-value",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, summary.gf), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "stat-label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, "Goals For")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "stat-card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "stat-value",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }, summary.ga), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "stat-label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, "Goals Against")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "stat-card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "stat-value",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }, (0,_lib_format__WEBPACK_IMPORTED_MODULE_2__.formatGoalDifference)(summary.gd)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "stat-label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, "Goal Difference")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "stat-card stat-card--points",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "stat-value",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }, summary.points), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "stat-label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, "Points")))));
};

/***/ }),

/***/ "./src/components/Team/TeamPage.tsx":
/*!******************************************!*\
  !*** ./src/components/Team/TeamPage.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TeamPage: () => (/* binding */ TeamPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-UH6JLGW7.mjs");
/* harmony import */ var _TeamHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TeamHeader */ "./src/components/Team/TeamHeader.tsx");
/* harmony import */ var _MatchList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MatchList */ "./src/components/Team/MatchList.tsx");
/* harmony import */ var _UI_Spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../UI/Spinner */ "./src/components/UI/Spinner.tsx");
/* harmony import */ var _UI_ErrorBanner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../UI/ErrorBanner */ "./src/components/UI/ErrorBanner.tsx");
/* harmony import */ var _hooks_useTeamHistory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/useTeamHistory */ "./src/hooks/useTeamHistory.ts");
/* harmony import */ var _hooks_useWebSocketMatches__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/useWebSocketMatches */ "./src/hooks/useWebSocketMatches.ts");
/* harmony import */ var _hooks_useClubs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/useClubs */ "./src/hooks/useClubs.ts");
var _jsxFileName = "/app/src/components/Team/TeamPage.tsx",
  _this = undefined;
/** @format */










var TeamPage = function TeamPage() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useParams)(),
    code = _useParams.code;
  var _useWebSocketMatches = (0,_hooks_useWebSocketMatches__WEBPACK_IMPORTED_MODULE_7__.useWebSocketMatches)(),
    matches = _useWebSocketMatches.matches,
    wsError = _useWebSocketMatches.error;
  var _useClubsMap = (0,_hooks_useClubs__WEBPACK_IMPORTED_MODULE_8__.useClubsMap)(),
    clubsMap = _useClubsMap.clubsMap,
    clubsLoading = _useClubsMap.isLoading,
    clubsError = _useClubsMap.error;
  var teamHistory = (0,_hooks_useTeamHistory__WEBPACK_IMPORTED_MODULE_6__.useTeamHistory)(code || '', matches, clubsMap);
  var isLoading = clubsLoading && !teamHistory;
  var hasError = wsError || clubsError;
  if (isLoading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "team-page-container",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "loading-container",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_UI_Spinner__WEBPACK_IMPORTED_MODULE_4__.Spinner, {
      size: "large",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 11
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 11
      }
    }, "Loading team data...")));
  }
  if (hasError) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "team-page-container",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_UI_ErrorBanner__WEBPACK_IMPORTED_MODULE_5__.ErrorBanner, {
      error: hasError,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "error-fallback",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 11
      }
    }, "Unable to load team data. Please try again later.")));
  }
  if (!teamHistory) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "team-page-container",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "not-found",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 11
      }
    }, "Team Not Found"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 11
      }
    }, "No data available for team code: ", code)));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "team-page-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TeamHeader__WEBPACK_IMPORTED_MODULE_2__.TeamHeader, {
    teamHistory: teamHistory,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MatchList__WEBPACK_IMPORTED_MODULE_3__.MatchList, {
    matches: teamHistory.matches,
    teamCode: code || '',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }));
};

/***/ }),

/***/ "./src/components/UI/ErrorBanner.tsx":
/*!*******************************************!*\
  !*** ./src/components/UI/ErrorBanner.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorBanner: () => (/* binding */ ErrorBanner)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/app/src/components/UI/ErrorBanner.tsx",
  _this = undefined;

var ErrorBanner = function ErrorBanner(_ref) {
  var error = _ref.error,
    onRetry = _ref.onRetry,
    onDismiss = _ref.onDismiss;
  if (!error) return null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "error-banner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "error-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "error-icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, "\u26A0\uFE0F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "error-message",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, error.message), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "error-actions",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, onRetry && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: onRetry,
    className: "error-retry-btn",
    type: "button",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, "Try Again"), onDismiss && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: onDismiss,
    className: "error-dismiss-btn",
    type: "button",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, "\u2715"))));
};

/***/ }),

/***/ "./src/components/UI/InfoBanner.tsx":
/*!******************************************!*\
  !*** ./src/components/UI/InfoBanner.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InfoBanner: () => (/* binding */ InfoBanner)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/app/src/components/UI/InfoBanner.tsx",
  _this = undefined;

var InfoBanner = function InfoBanner(_ref) {
  var message = _ref.message,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'info' : _ref$type,
    onAction = _ref.onAction,
    actionLabel = _ref.actionLabel;
  var getIcon = function getIcon() {
    switch (type) {
      case 'success':
        return '✅';
      case 'warning':
        return '⚠️';
      default:
        return 'ℹ️';
    }
  };
  var getClassName = function getClassName() {
    return "info-banner info-banner--".concat(type);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: getClassName(),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "info-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "info-icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, getIcon()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "info-message",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, message), onAction && actionLabel && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: onAction,
    className: "info-action-btn",
    type: "button",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, actionLabel)));
};

/***/ }),

/***/ "./src/components/UI/Spinner.tsx":
/*!***************************************!*\
  !*** ./src/components/UI/Spinner.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Spinner: () => (/* binding */ Spinner)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/app/src/components/UI/Spinner.tsx",
  _this = undefined;

var Spinner = function Spinner(_ref) {
  var _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'medium' : _ref$size,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className;
  var sizeClass = "spinner--".concat(size);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "spinner ".concat(sizeClass, " ").concat(className).trim(),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "spinner-ring",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "spinner-ring",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "spinner-ring",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }));
};

/***/ }),

/***/ "./src/hooks/useClubs.ts":
/*!*******************************!*\
  !*** ./src/hooks/useClubs.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useClubs: () => (/* binding */ useClubs),
/* harmony export */   useClubsMap: () => (/* binding */ useClubsMap)
/* harmony export */ });
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tanstack/react-query */ "./node_modules/@tanstack/react-query/build/legacy/useQuery.js");
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/api */ "./src/services/api.ts");


// Hook to fetch clubs with React Query
var useClubs = function useClubs() {
  return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.useQuery)({
    queryKey: ['clubs'],
    queryFn: _services_api__WEBPACK_IMPORTED_MODULE_1__.getClubs,
    staleTime: 5 * 60 * 1000,
    // 5 minutes
    retry: 3,
    retryDelay: function retryDelay(attemptIndex) {
      return Math.min(1000 * Math.pow(2, attemptIndex), 30000);
    }
  });
};

// Hook to get clubs map by code
var useClubsMap = function useClubsMap() {
  var _useClubs = useClubs(),
    clubs = _useClubs.data,
    isLoading = _useClubs.isLoading,
    error = _useClubs.error;
  var clubsMap = new Map();
  if (clubs) {
    clubs.forEach(function (club) {
      clubsMap.set(club.code, club);
    });
  }
  return {
    clubsMap: clubsMap,
    clubs: clubs,
    isLoading: isLoading,
    error: error
  };
};

/***/ }),

/***/ "./src/hooks/useStandings.ts":
/*!***********************************!*\
  !*** ./src/hooks/useStandings.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useStandings: () => (/* binding */ useStandings)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_aggregators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/aggregators */ "./src/lib/aggregators.ts");
/* harmony import */ var _lib_sorting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/sorting */ "./src/lib/sorting.ts");




// Hook to calculate standings table
var useStandings = function useStandings(matches, clubsMap) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    if (matches.length === 0) {
      return {
        tableRows: [],
        totalMatches: 0,
        lastUpdate: null
      };
    }

    // Calculates table statistics
    var tableRows = (0,_lib_aggregators__WEBPACK_IMPORTED_MODULE_1__.calculateStandings)(matches, clubsMap);

    // Sorts according to specified rules
    var sortedRows = (0,_lib_sorting__WEBPACK_IMPORTED_MODULE_2__.sortTableRows)(tableRows);

    // Adds positions
    var rowsWithPositions = (0,_lib_sorting__WEBPACK_IMPORTED_MODULE_2__.addPositions)(sortedRows);
    return {
      tableRows: rowsWithPositions,
      totalMatches: matches.length,
      lastUpdate: new Date()
    };
  }, [matches, clubsMap]);
};

/***/ }),

/***/ "./src/hooks/useTeamHistory.ts":
/*!*************************************!*\
  !*** ./src/hooks/useTeamHistory.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useTeamHistory: () => (/* binding */ useTeamHistory)
/* harmony export */ });
/* harmony import */ var _app_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_sorting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/sorting */ "./src/lib/sorting.ts");
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/constants */ "./src/lib/constants.ts");





// Hook to calculate team history and statistics
var useTeamHistory = function useTeamHistory(code, matches, clubsMap) {
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
    if (!code || matches.length === 0) {
      return null;
    }

    // Filters team matches (home or away)
    var teamMatches = matches.filter(function (match) {
      return match.home === code || match.away === code;
    });
    if (teamMatches.length === 0) {
      return null;
    }

    // Sorts by date (most recent first)
    var sortedMatches = (0,_lib_sorting__WEBPACK_IMPORTED_MODULE_2__.sortMatchesByDate)(teamMatches);

    // Calculates statistics
    var wins = 0;
    var draws = 0;
    var losses = 0;
    var gf = 0;
    var ga = 0;
    teamMatches.forEach(function (match) {
      var _match$score = (0,_app_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(match.score, 2),
        homeGoals = _match$score[0],
        awayGoals = _match$score[1];
      var isHome = match.home === code;
      if (isHome) {
        gf += homeGoals;
        ga += awayGoals;
        if (homeGoals > awayGoals) wins++;else if (homeGoals < awayGoals) losses++;else draws++;
      } else {
        gf += awayGoals;
        ga += homeGoals;
        if (awayGoals > homeGoals) wins++;else if (awayGoals < homeGoals) losses++;else draws++;
      }
    });
    var played = wins + draws + losses;
    var points = wins * _lib_constants__WEBPACK_IMPORTED_MODULE_3__.APP_CONFIG.POINTS.WIN + draws * _lib_constants__WEBPACK_IMPORTED_MODULE_3__.APP_CONFIG.POINTS.DRAW;
    var gd = gf - ga;

    // Gets club information
    var club = clubsMap.get(code) || {
      code: code,
      name: code // Fallback to code if name not available
    };
    return {
      club: club,
      matches: sortedMatches,
      summary: {
        played: played,
        wins: wins,
        draws: draws,
        losses: losses,
        gf: gf,
        ga: ga,
        gd: gd,
        points: points
      }
    };
  }, [code, matches, clubsMap]);
};

/***/ }),

/***/ "./src/hooks/useWebSocketMatches.ts":
/*!******************************************!*\
  !*** ./src/hooks/useWebSocketMatches.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useWebSocketMatches: () => (/* binding */ useWebSocketMatches)
/* harmony export */ });
/* harmony import */ var _app_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _app_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_websocket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/websocket */ "./src/services/websocket.ts");
/* harmony import */ var _lib_aggregators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/aggregators */ "./src/lib/aggregators.ts");






// Hook to manage WebSocket and real-time matches
var useWebSocketMatches = function useWebSocketMatches() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState2 = (0,_app_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
    matches = _useState2[0],
    setMatches = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
    _useState4 = (0,_app_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
    seasonFinished = _useState4[0],
    setSeasonFinished = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),
    _useState6 = (0,_app_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),
    error = _useState6[0],
    setError = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('disconnected'),
    _useState8 = (0,_app_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState7, 2),
    status = _useState8[0],
    setStatus = _useState8[1];
  var wsServiceRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  var processedMatchIds = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(new Set());

  // Initialises WebSocket service
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    wsServiceRef.current = new _services_websocket__WEBPACK_IMPORTED_MODULE_3__.WebSocketService();

    // Configures callbacks
    wsServiceRef.current.setCallbacks({
      onMessage: function onMessage(newMatches) {
        setMatches(function (prevMatches) {
          var updatedMatches = (0,_app_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(prevMatches);
          newMatches.forEach(function (match) {
            var matchId = (0,_lib_aggregators__WEBPACK_IMPORTED_MODULE_4__.generateMatchId)(match);

            // Avoids duplicates
            if (!processedMatchIds.current.has(matchId)) {
              processedMatchIds.current.add(matchId);
              updatedMatches.push(match);
            }
          });
          return updatedMatches;
        });

        // Clears error if present
        if (error) {
          setError(null);
        }
      },
      onSeasonFinished: function onSeasonFinished() {
        setSeasonFinished(true);
        setStatus('disconnected');
      },
      onError: function onError(wsError) {
        setError(wsError);
        setStatus('error');
      },
      onStatusChange: function onStatusChange(newStatus) {
        setStatus(newStatus);
      }
    });

    // Connects automatically
    wsServiceRef.current.connect();

    // Cleanup
    return function () {
      if (wsServiceRef.current) {
        wsServiceRef.current.disconnect();
      }
    };
  }, []);

  // Function to manually reconnect
  var reconnect = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function () {
    if (wsServiceRef.current) {
      wsServiceRef.current.connect();
    }
  }, []);

  // Function to clear matches
  var clearMatches = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function () {
    setMatches([]);
    processedMatchIds.current.clear();
  }, []);

  // Function to reset season
  var resetSeason = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function () {
    setSeasonFinished(false);
    setError(null);
    setStatus('disconnected');
    clearMatches();
    if (wsServiceRef.current) {
      wsServiceRef.current.reset();
      wsServiceRef.current.connect();
    }
  }, [clearMatches]);
  return {
    matches: matches,
    seasonFinished: seasonFinished,
    error: error,
    status: status,
    reconnect: reconnect,
    clearMatches: clearMatches,
    resetSeason: resetSeason
  };
};

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.tsx");
var _jsxFileName = "/app/src/index.tsx";
/** @format */




var container = document.getElementById('root');
if (container) {
  (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.hydrateRoot)(container, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_App__WEBPACK_IMPORTED_MODULE_2__.App, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 26
    }
  }));
}

/***/ }),

/***/ "./src/lib/aggregators.ts":
/*!********************************!*\
  !*** ./src/lib/aggregators.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculateStandings: () => (/* binding */ calculateStandings),
/* harmony export */   generateMatchId: () => (/* binding */ generateMatchId)
/* harmony export */ });
/* harmony import */ var _app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _app_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/lib/constants.ts");




// Partial interface for table construction

// Helper function to extract goals from score (handles both formats)
var extractGoals = function extractGoals(score) {
  if (Array.isArray(score)) {
    return score;
  }
  return score.ft;
};

// Generates unique ID for match (for deduplication)
var generateMatchId = function generateMatchId(match) {
  return "".concat(match.date, "|").concat(match.home, "|").concat(match.away);
};

// Calculates match result for a specific team
var calculateMatchResult = function calculateMatchResult(match, teamCode) {
  var _extractGoals = extractGoals(match.score),
    _extractGoals2 = (0,_app_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_extractGoals, 2),
    homeGoals = _extractGoals2[0],
    awayGoals = _extractGoals2[1];
  if (match.home === teamCode) {
    if (homeGoals > awayGoals) return 'W';
    if (homeGoals < awayGoals) return 'L';
    return 'D';
  } else {
    if (awayGoals > homeGoals) return 'W';
    if (awayGoals < homeGoals) return 'L';
    return 'D';
  }
};

// Updates team statistics based on a match
var updateTeamStats = function updateTeamStats(stats, match, teamCode) {
  var _extractGoals3 = extractGoals(match.score),
    _extractGoals4 = (0,_app_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_extractGoals3, 2),
    homeGoals = _extractGoals4[0],
    awayGoals = _extractGoals4[1];
  var isHome = match.home === teamCode;
  var goalsFor = isHome ? homeGoals : awayGoals;
  var goalsAgainst = isHome ? awayGoals : homeGoals;
  var result = calculateMatchResult(match, teamCode);
  var newStats = (0,_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, stats);

  // Updates basic statistics
  newStats.played += 1;
  newStats.gf += goalsFor;
  newStats.ga += goalsAgainst;
  newStats.gd = newStats.gf - newStats.ga;

  // Updates wins/draws/losses
  switch (result) {
    case 'W':
      newStats.wins += 1;
      newStats.points += _constants__WEBPACK_IMPORTED_MODULE_2__.APP_CONFIG.POINTS.WIN;
      break;
    case 'D':
      newStats.draws += 1;
      newStats.points += _constants__WEBPACK_IMPORTED_MODULE_2__.APP_CONFIG.POINTS.DRAW;
      break;
    case 'L':
      newStats.losses += 1;
      newStats.points += _constants__WEBPACK_IMPORTED_MODULE_2__.APP_CONFIG.POINTS.LOSS;
      break;
  }

  // Updates form (last 5 results)
  newStats.form.push(result);
  if (newStats.form.length > _constants__WEBPACK_IMPORTED_MODULE_2__.APP_CONFIG.FORM_HISTORY) {
    newStats.form.shift();
  }
  return newStats;
};

// Initialises empty statistics for a team
var initializeTeamStats = function initializeTeamStats(code) {
  return {
    code: code,
    played: 0,
    wins: 0,
    draws: 0,
    losses: 0,
    gf: 0,
    ga: 0,
    gd: 0,
    points: 0,
    form: []
  };
};

// Main function to calculate standings
var calculateStandings = function calculateStandings(matches, clubsMap) {
  // Map to store partial statistics for each team
  var teamStatsMap = new Map();

  // Initialises statistics for all known clubs
  clubsMap.forEach(function (club) {
    teamStatsMap.set(club.code, initializeTeamStats(club.code));
  });

  // Processes each match
  matches.forEach(function (match) {
    // Validates if match has valid score using the helper function
    try {
      var _extractGoals5 = extractGoals(match.score),
        _extractGoals6 = (0,_app_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_extractGoals5, 2),
        homeGoals = _extractGoals6[0],
        awayGoals = _extractGoals6[1];
      if (typeof homeGoals !== 'number' || typeof awayGoals !== 'number' || isNaN(homeGoals) || isNaN(awayGoals)) {
        console.warn('Invalid score values:', match);
        return;
      }
    } catch (error) {
      console.warn('Invalid match score format:', match, error);
      return;
    }

    // Initialises statistics for teams not seen before
    if (!teamStatsMap.has(match.home)) {
      teamStatsMap.set(match.home, initializeTeamStats(match.home));
    }
    if (!teamStatsMap.has(match.away)) {
      teamStatsMap.set(match.away, initializeTeamStats(match.away));
    }

    // Updates statistics for both teams
    var homeStats = teamStatsMap.get(match.home);
    var awayStats = teamStatsMap.get(match.away);
    teamStatsMap.set(match.home, updateTeamStats(homeStats, match, match.home));
    teamStatsMap.set(match.away, updateTeamStats(awayStats, match, match.away));
  });

  // Converts Map to array and enriches with club names
  var tableRows = Array.from(teamStatsMap.values()).map(function (stats) {
    var club = clubsMap.get(stats.code);
    return (0,_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, stats), {}, {
      name: (club === null || club === void 0 ? void 0 : club.name) || stats.code // Fallback to code if name not available
    });
  });
  return tableRows;
};

/***/ }),

/***/ "./src/lib/constants.ts":
/*!******************************!*\
  !*** ./src/lib/constants.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   APP_CONFIG: () => (/* binding */ APP_CONFIG),
/* harmony export */   ERROR_MESSAGES: () => (/* binding */ ERROR_MESSAGES),
/* harmony export */   SORTING_RULES: () => (/* binding */ SORTING_RULES),
/* harmony export */   WS_STATUS: () => (/* binding */ WS_STATUS)
/* harmony export */ });
// Application configuration
var APP_CONFIG = {
  BACKEND_URL: 'http://localhost:65000',
  WEBSOCKET_URL: 'ws://localhost:65000/matches/ws',
  POINTS: {
    WIN: 3,
    DRAW: 1,
    LOSS: 0
  },
  TABLE_SIZE: 20,
  // Number of teams in Premier League
  FORM_HISTORY: 5 // Last 5 results to show in table
};

// WebSocket connection states
var WS_STATUS = {
  CONNECTING: 'connecting',
  CONNECTED: 'connected',
  DISCONNECTED: 'disconnected',
  ERROR: 'error'
};

// Error messages
var ERROR_MESSAGES = {
  FETCH_CLUBS_FAILED: 'Failed to load clubs data',
  WEBSOCKET_CONNECTION_FAILED: 'WebSocket connection failed',
  INVALID_MATCH_DATA: 'Invalid match data received',
  SEASON_FINISHED: 'Season finished'
};

// Table sorting rules (documented in code)
var SORTING_RULES = {
  // 1. Points (desc) - highest points first
  // 2. Goal Difference (desc) - highest goal difference first
  // 3. Goals For (desc) - most goals scored first
  // 4. Name (asc) - alphabetical order of name
  PRIORITIES: ['points', 'gd', 'gf', 'name']
};

/***/ }),

/***/ "./src/lib/format.ts":
/*!***************************!*\
  !*** ./src/lib/format.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   capitalize: () => (/* binding */ capitalize),
/* harmony export */   formatDate: () => (/* binding */ formatDate),
/* harmony export */   formatDateWithDay: () => (/* binding */ formatDateWithDay),
/* harmony export */   formatForm: () => (/* binding */ formatForm),
/* harmony export */   formatGoalDifference: () => (/* binding */ formatGoalDifference),
/* harmony export */   formatScore: () => (/* binding */ formatScore),
/* harmony export */   truncate: () => (/* binding */ truncate)
/* harmony export */ });
/* harmony import */ var _app_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/format.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/parseISO.js");
/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns/locale */ "./node_modules/date-fns/locale/en-GB.js");



// Date formatting
var formatDate = function formatDate(dateString) {
  try {
    var date = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.parseISO)(dateString);
    return (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.format)(date, 'dd/MM/yyyy', {
      locale: date_fns_locale__WEBPACK_IMPORTED_MODULE_3__.enGB
    });
  } catch (_unused) {
    return dateString; // Fallback to original string if parsing fails
  }
};

// Date formatting with day of week
var formatDateWithDay = function formatDateWithDay(dateString) {
  try {
    var date = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.parseISO)(dateString);
    return (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.format)(date, 'EEE, dd/MM/yyyy', {
      locale: date_fns_locale__WEBPACK_IMPORTED_MODULE_3__.enGB
    });
  } catch (_unused2) {
    return dateString;
  }
};

// Score formatting - handles both direct array and object with ft property
var formatScore = function formatScore(score) {
  var _ref = Array.isArray(score) ? score : score.ft,
    _ref2 = (0,_app_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 2),
    homeGoals = _ref2[0],
    awayGoals = _ref2[1];
  return "".concat(homeGoals, "\u2013").concat(awayGoals);
};

// Goal difference formatting
var formatGoalDifference = function formatGoalDifference(gd) {
  if (gd > 0) return "+".concat(gd);
  if (gd < 0) return "".concat(gd);
  return '0';
};

// Form formatting (last results)
var formatForm = function formatForm(form) {
  return form.join('');
};

// String capitalisation
var capitalize = function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

// String truncation
var truncate = function truncate(str, maxLength) {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength) + '...';
};

/***/ }),

/***/ "./src/lib/sorting.ts":
/*!****************************!*\
  !*** ./src/lib/sorting.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addPositions: () => (/* binding */ addPositions),
/* harmony export */   sortMatchesByDate: () => (/* binding */ sortMatchesByDate),
/* harmony export */   sortMatchesByDateAsc: () => (/* binding */ sortMatchesByDateAsc),
/* harmony export */   sortTableRows: () => (/* binding */ sortTableRows)
/* harmony export */ });
/* harmony import */ var _app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _app_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");


// Comparison function for table sorting
// Sorting rules (documented):
// 1. Points (desc) - highest points first
// 2. Goal Difference (desc) - highest goal difference first  
// 3. Goals For (desc) - most goals scored first
// 4. Name (asc) - alphabetical order of name
var sortTableRows = function sortTableRows(tableRows) {
  return (0,_app_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(tableRows).sort(function (a, b) {
    // 1. Compare points (highest first)
    if (a.points !== b.points) {
      return b.points - a.points;
    }

    // 2. Compare goal difference (highest first)
    if (a.gd !== b.gd) {
      return b.gd - a.gd;
    }

    // 3. Compare goals for (highest first)
    if (a.gf !== b.gf) {
      return b.gf - a.gf;
    }

    // 4. Compare names (alphabetical order)
    return a.name.localeCompare(b.name);
  });
};

// Adds position (ranking) for each team in the table
var addPositions = function addPositions(tableRows) {
  return tableRows.map(function (row, index) {
    return (0,_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, row), {}, {
      position: index + 1
    });
  });
};

// Helper function to sort matches by date (most recent first)
var sortMatchesByDate = function sortMatchesByDate(matches) {
  return (0,_app_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(matches).sort(function (a, b) {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
};

// Helper function to sort matches by date (oldest first)
var sortMatchesByDateAsc = function sortMatchesByDateAsc(matches) {
  return (0,_app_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(matches).sort(function (a, b) {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });
};

/***/ }),

/***/ "./src/lib/validators.ts":
/*!*******************************!*\
  !*** ./src/lib/validators.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClubSchema: () => (/* binding */ ClubSchema),
/* harmony export */   ClubsResponseSchema: () => (/* binding */ ClubsResponseSchema),
/* harmony export */   MatchSchema: () => (/* binding */ MatchSchema),
/* harmony export */   MatchesArraySchema: () => (/* binding */ MatchesArraySchema),
/* harmony export */   ScoreSchema: () => (/* binding */ ScoreSchema),
/* harmony export */   WebSocketMessageSchema: () => (/* binding */ WebSocketMessageSchema),
/* harmony export */   isValidMatch: () => (/* binding */ isValidMatch),
/* harmony export */   isValidMatchesArray: () => (/* binding */ isValidMatchesArray),
/* harmony export */   parseWebSocketMessage: () => (/* binding */ parseWebSocketMessage)
/* harmony export */ });
/* harmony import */ var _app_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js */ "./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js");
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! zod */ "./node_modules/zod/v4/classic/schemas.js");


// Validator for Club
var ClubSchema = zod__WEBPACK_IMPORTED_MODULE_1__.object({
  code: zod__WEBPACK_IMPORTED_MODULE_1__.string(),
  name: zod__WEBPACK_IMPORTED_MODULE_1__.string(),
  country: zod__WEBPACK_IMPORTED_MODULE_1__.string().optional()
});

// Validator for Score - accepts both direct array and object with ft property
var ScoreSchema = zod__WEBPACK_IMPORTED_MODULE_1__.union([zod__WEBPACK_IMPORTED_MODULE_1__.tuple([zod__WEBPACK_IMPORTED_MODULE_1__.number(), zod__WEBPACK_IMPORTED_MODULE_1__.number()]),
// Direct array: [3, 1]
zod__WEBPACK_IMPORTED_MODULE_1__.object({
  ft: zod__WEBPACK_IMPORTED_MODULE_1__.tuple([zod__WEBPACK_IMPORTED_MODULE_1__.number(), zod__WEBPACK_IMPORTED_MODULE_1__.number()])
}) // Object: {"ft": [3, 1]}
]);

// Validator for Match
var MatchSchema = zod__WEBPACK_IMPORTED_MODULE_1__.object({
  round: zod__WEBPACK_IMPORTED_MODULE_1__.union([zod__WEBPACK_IMPORTED_MODULE_1__.string(), zod__WEBPACK_IMPORTED_MODULE_1__.number()]),
  competition: zod__WEBPACK_IMPORTED_MODULE_1__.string().optional(),
  date: zod__WEBPACK_IMPORTED_MODULE_1__.string(),
  home: zod__WEBPACK_IMPORTED_MODULE_1__.string(),
  away: zod__WEBPACK_IMPORTED_MODULE_1__.string(),
  score: ScoreSchema
});

// Validator for array of matches
var MatchesArraySchema = zod__WEBPACK_IMPORTED_MODULE_1__.array(MatchSchema);

// Validator for WebSocket message
var WebSocketMessageSchema = zod__WEBPACK_IMPORTED_MODULE_1__.union([MatchesArraySchema,
// Direct array of matches
zod__WEBPACK_IMPORTED_MODULE_1__.object({
  type: zod__WEBPACK_IMPORTED_MODULE_1__.string().optional(),
  payload: zod__WEBPACK_IMPORTED_MODULE_1__.union([MatchSchema, MatchesArraySchema]).optional()
})]);

// Validator for clubs API response
var ClubsResponseSchema = zod__WEBPACK_IMPORTED_MODULE_1__.array(ClubSchema);

// Helper function to validate individual match
var isValidMatch = function isValidMatch(data) {
  return MatchSchema.safeParse(data).success;
};

// Helper function to validate array of matches
var isValidMatchesArray = function isValidMatchesArray(data) {
  return MatchesArraySchema.safeParse(data).success;
};

// Helper function to validate WebSocket message
var parseWebSocketMessage = function parseWebSocketMessage(data) {
  console.log('Validating WebSocket message:', data);

  // If it's already an array, validate it directly
  if (Array.isArray(data)) {
    console.log('Data is array, validating directly');
    var result = MatchesArraySchema.safeParse(data);
    if (result.success) {
      console.log('Array validation successful:', result.data.length, 'matches');
      return result.data;
    }
    // If validation fails, log but don't reject - try to extract valid matches
    console.warn('Some matches in array failed validation, attempting to extract valid ones');
    console.warn('Validation errors:', result.error);
    var validMatches = [];
    var _iterator = (0,_app_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var item = _step.value;
        if (isValidMatch(item)) {
          validMatches.push(item);
        } else {
          console.warn('Invalid match item:', item);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    console.log('Extracted valid matches:', validMatches.length);
    return validMatches.length > 0 ? validMatches : null;
  }

  // If it's an object, try to parse it
  if (typeof data === 'object' && data !== null) {
    console.log('Data is object, trying to parse');
    var _result = WebSocketMessageSchema.safeParse(data);
    if (_result.success) {
      var parsed = _result.data;

      // If it's object with payload
      if (parsed.payload) {
        if (Array.isArray(parsed.payload)) {
          console.log('Object with array payload:', parsed.payload.length, 'matches');
          return parsed.payload;
        } else {
          console.log('Object with single match payload');
          return [parsed.payload];
        }
      }
    } else {
      console.warn('Object validation failed:', _result.error);
    }
  }

  // If we get here, the data format is unexpected
  console.warn('Unexpected WebSocket message format:', data);
  return null;
};

/***/ }),

/***/ "./src/services/api.ts":
/*!*****************************!*\
  !*** ./src/services/api.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getClubByCode: () => (/* binding */ getClubByCode),
/* harmony export */   getClubs: () => (/* binding */ getClubs)
/* harmony export */ });
/* harmony import */ var _app_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regenerator.js */ "./node_modules/@babel/runtime/helpers/esm/regenerator.js");
/* harmony import */ var _app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _lib_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/validators */ "./src/lib/validators.ts");
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/constants */ "./src/lib/constants.ts");





// Function to fetch clubs from API
var getClubs = /*#__PURE__*/function () {
  var _ref = (0,_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/(0,_app_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])().m(function _callee() {
    var response, data, validationResult, _t;
    return (0,_app_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          _context.p = 0;
          _context.n = 1;
          return fetch("".concat(_lib_constants__WEBPACK_IMPORTED_MODULE_3__.APP_CONFIG.BACKEND_URL, "/clubs/"));
        case 1:
          response = _context.v;
          if (response.ok) {
            _context.n = 2;
            break;
          }
          throw new Error("HTTP error! status: ".concat(response.status));
        case 2:
          _context.n = 3;
          return response.json();
        case 3:
          data = _context.v;
          // Validates response with Zod
          validationResult = _lib_validators__WEBPACK_IMPORTED_MODULE_2__.ClubsResponseSchema.safeParse(data);
          if (validationResult.success) {
            _context.n = 4;
            break;
          }
          console.error('Invalid clubs data format:', validationResult.error);
          throw new Error('Invalid data format received from API');
        case 4:
          return _context.a(2, validationResult.data);
        case 5:
          _context.p = 5;
          _t = _context.v;
          console.error('Failed to fetch clubs:', _t);
          throw new Error('Failed to load clubs data');
        case 6:
          return _context.a(2);
      }
    }, _callee, null, [[0, 5]]);
  }));
  return function getClubs() {
    return _ref.apply(this, arguments);
  };
}();

// Function to fetch specific club by code
var getClubByCode = /*#__PURE__*/function () {
  var _ref2 = (0,_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/(0,_app_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])().m(function _callee2(code) {
    var response, data, validationResult, _t2;
    return (0,_app_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])().w(function (_context2) {
      while (1) switch (_context2.p = _context2.n) {
        case 0:
          _context2.p = 0;
          _context2.n = 1;
          return fetch("".concat(_lib_constants__WEBPACK_IMPORTED_MODULE_3__.APP_CONFIG.BACKEND_URL, "/clubs/").concat(code));
        case 1:
          response = _context2.v;
          if (response.ok) {
            _context2.n = 3;
            break;
          }
          if (!(response.status === 404)) {
            _context2.n = 2;
            break;
          }
          throw new Error("Club with code '".concat(code, "' not found"));
        case 2:
          throw new Error("HTTP error! status: ".concat(response.status));
        case 3:
          _context2.n = 4;
          return response.json();
        case 4:
          data = _context2.v;
          // Validates response with Zod
          validationResult = _lib_validators__WEBPACK_IMPORTED_MODULE_2__.ClubsResponseSchema.element.safeParse(data);
          if (validationResult.success) {
            _context2.n = 5;
            break;
          }
          console.error('Invalid club data format:', validationResult.error);
          throw new Error('Invalid data format received from API');
        case 5:
          return _context2.a(2, validationResult.data);
        case 6:
          _context2.p = 6;
          _t2 = _context2.v;
          console.error("Failed to fetch club ".concat(code, ":"), _t2);
          throw _t2;
        case 7:
          return _context2.a(2);
      }
    }, _callee2, null, [[0, 6]]);
  }));
  return function getClubByCode(_x) {
    return _ref2.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/services/websocket.ts":
/*!***********************************!*\
  !*** ./src/services/websocket.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WebSocketService: () => (/* binding */ WebSocketService)
/* harmony export */ });
/* harmony import */ var _app_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _app_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _lib_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/validators */ "./src/lib/validators.ts");
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/constants */ "./src/lib/constants.ts");




var WebSocketService = /*#__PURE__*/function () {
  function WebSocketService() {
    var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _lib_constants__WEBPACK_IMPORTED_MODULE_3__.APP_CONFIG.WEBSOCKET_URL;
    (0,_app_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, WebSocketService);
    this.url = url;
    this.ws = null;
    this.status = _lib_constants__WEBPACK_IMPORTED_MODULE_3__.WS_STATUS.DISCONNECTED;
    this.reconnectAttempts = 0;
    this.maxReconnectAttempts = 5;
    this.reconnectDelay = 1000;
    // Starts with 1 second
    this.reconnectTimer = null;
    this.callbacks = {};
    this.seasonFinished = false;
  }

  // Connects to WebSocket
  return (0,_app_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(WebSocketService, [{
    key: "connect",
    value: function connect() {
      var _this$ws;
      if (((_this$ws = this.ws) === null || _this$ws === void 0 ? void 0 : _this$ws.readyState) === WebSocket.OPEN || this.seasonFinished) {
        console.log('WebSocket: Already connected or season finished, skipping connection');
        return;
      }
      console.log('WebSocket: Attempting to connect to:', this.url);
      this.setStatus(_lib_constants__WEBPACK_IMPORTED_MODULE_3__.WS_STATUS.CONNECTING);
      try {
        this.ws = new WebSocket(this.url);
        this.setupEventHandlers();
        console.log('WebSocket: Connection initiated');
      } catch (error) {
        console.error('WebSocket: Connection failed:', error);
        this.handleError(error);
      }
    }

    // Disconnects from WebSocket
  }, {
    key: "disconnect",
    value: function disconnect() {
      if (this.reconnectTimer) {
        clearTimeout(this.reconnectTimer);
        this.reconnectTimer = null;
      }
      if (this.ws) {
        this.ws.close();
        this.ws = null;
      }
      this.setStatus(_lib_constants__WEBPACK_IMPORTED_MODULE_3__.WS_STATUS.DISCONNECTED);
      this.reconnectAttempts = 0;
    }

    // Sets callbacks
  }, {
    key: "setCallbacks",
    value: function setCallbacks(callbacks) {
      this.callbacks = callbacks;
    }

    // Gets current status
  }, {
    key: "getStatus",
    value: function getStatus() {
      return this.status;
    }

    // Checks if season has finished
  }, {
    key: "isSeasonFinished",
    value: function isSeasonFinished() {
      return this.seasonFinished;
    }

    // Sets up WebSocket event handlers
  }, {
    key: "setupEventHandlers",
    value: function setupEventHandlers() {
      var _this = this;
      if (!this.ws) return;
      this.ws.onopen = function () {
        console.log('WebSocket: Connection opened successfully');
        _this.setStatus(_lib_constants__WEBPACK_IMPORTED_MODULE_3__.WS_STATUS.CONNECTED);
        _this.reconnectAttempts = 0;
        _this.reconnectDelay = 1000;
      };
      this.ws.onmessage = function (event) {
        console.log('WebSocket: Message received:', event.data);
        try {
          // First check if it's a raw "season finished" message
          if (event.data === 'season finished') {
            console.log('WebSocket: Season finished message received');
            _this.handleSeasonFinished();
            return;
          }

          // Try to parse as JSON
          var data = JSON.parse(event.data);

          // Check if it's season finished message in JSON format
          if (data === 'season finished' || data.type === 'season_finished') {
            console.log('WebSocket: Season finished message received (JSON)');
            _this.handleSeasonFinished();
            return;
          }

          // Process match message
          var matches = (0,_lib_validators__WEBPACK_IMPORTED_MODULE_2__.parseWebSocketMessage)(data);
          console.log('WebSocket: parseWebSocketMessage result:', matches);
          if (matches && matches.length > 0) {
            var _this$callbacks$onMes, _this$callbacks;
            console.log('WebSocket: Valid matches received:', matches.length);
            (_this$callbacks$onMes = (_this$callbacks = _this.callbacks).onMessage) === null || _this$callbacks$onMes === void 0 ? void 0 : _this$callbacks$onMes.call(_this$callbacks, matches);
          } else {
            console.log('WebSocket: No valid matches in message');
          }
        } catch (error) {
          // If JSON parsing fails, check if it's a raw string message
          if (typeof event.data === 'string' && event.data.includes('season finished')) {
            console.log('WebSocket: Season finished message received (raw string)');
            _this.handleSeasonFinished();
            return;
          }
          console.warn('WebSocket: Failed to parse message:', error);
        }
      };
      this.ws.onclose = function (event) {
        console.log('WebSocket: Connection closed:', event.code, event.reason);
        if (!event.wasClean && !_this.seasonFinished) {
          console.log('WebSocket: Attempting reconnection...');
          _this.handleReconnection();
        } else {
          _this.setStatus(_lib_constants__WEBPACK_IMPORTED_MODULE_3__.WS_STATUS.DISCONNECTED);
        }
      };
      this.ws.onerror = function (event) {
        console.error('WebSocket: Error occurred:', event);
        _this.handleError(new Error('WebSocket error occurred'));
      };
    }

    // Handles season finished
  }, {
    key: "handleSeasonFinished",
    value: function handleSeasonFinished() {
      var _this$callbacks$onSea, _this$callbacks2;
      this.seasonFinished = true;
      this.disconnect();
      (_this$callbacks$onSea = (_this$callbacks2 = this.callbacks).onSeasonFinished) === null || _this$callbacks$onSea === void 0 ? void 0 : _this$callbacks$onSea.call(_this$callbacks2);
    }

    // Handles automatic reconnection
  }, {
    key: "handleReconnection",
    value: function handleReconnection() {
      var _this2 = this;
      if (this.reconnectAttempts >= this.maxReconnectAttempts || this.seasonFinished) {
        var _this$callbacks$onErr, _this$callbacks3;
        this.setStatus(_lib_constants__WEBPACK_IMPORTED_MODULE_3__.WS_STATUS.ERROR);
        (_this$callbacks$onErr = (_this$callbacks3 = this.callbacks).onError) === null || _this$callbacks$onErr === void 0 ? void 0 : _this$callbacks$onErr.call(_this$callbacks3, new Error('Max reconnection attempts reached'));
        return;
      }
      this.setStatus(_lib_constants__WEBPACK_IMPORTED_MODULE_3__.WS_STATUS.CONNECTING);
      this.reconnectAttempts++;

      // Exponential backoff
      this.reconnectDelay = Math.min(this.reconnectDelay * 2, 30000);
      this.reconnectTimer = setTimeout(function () {
        _this2.connect();
      }, this.reconnectDelay);
    }

    // Handles errors
  }, {
    key: "handleError",
    value: function handleError(error) {
      var _this$callbacks$onErr2, _this$callbacks4;
      console.error('WebSocket error:', error);
      this.setStatus(_lib_constants__WEBPACK_IMPORTED_MODULE_3__.WS_STATUS.ERROR);
      (_this$callbacks$onErr2 = (_this$callbacks4 = this.callbacks).onError) === null || _this$callbacks$onErr2 === void 0 ? void 0 : _this$callbacks$onErr2.call(_this$callbacks4, error);
    }

    // Updates status and notifies callback
  }, {
    key: "setStatus",
    value: function setStatus(status) {
      var _this$callbacks$onSta, _this$callbacks5;
      this.status = status;
      (_this$callbacks$onSta = (_this$callbacks5 = this.callbacks).onStatusChange) === null || _this$callbacks$onSta === void 0 ? void 0 : _this$callbacks$onSta.call(_this$callbacks5, status);
    }

    // Resets service (useful for testing)
  }, {
    key: "reset",
    value: function reset() {
      this.seasonFinished = false;
      this.disconnect();
    }
  }]);
}();

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_globals_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./globals.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/globals.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_globals_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_globals_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_globals_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_globals_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

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
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkmollybet_frontend_takehome"] = self["webpackChunkmollybet_frontend_takehome"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./src/index.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map