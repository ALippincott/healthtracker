<!DOCTYPE html>
<!-- saved from url=(0023)http://backbonejs.org/# -->
<html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  
  <meta http-equiv="X-UA-Compatible" content="chrome=1">
  <meta name="viewport" content="width=device-width">
  <link rel="canonical" href="http://backbonejs.org/">
  <title>Backbone.js</title>
  <style>
    body {
      font-size: 14px;
      line-height: 22px;
      font-family: Helvetica Neue, Helvetica, Arial;
      background: #f4f4f4 url(docs/images/background.png);
    }
    .interface {
      font-family: "Lucida Grande", "Lucida Sans Unicode", Helvetica, Arial, sans-serif !important;
    }
    div#sidebar {
      background: #fff;
      position: fixed;
      z-index: 10;
      top: 0; left: 0; bottom: 0;
      width: 200px;
      overflow-y: auto;
      overflow-x: hidden;
      -webkit-overflow-scrolling: touch;
      padding: 15px 0 30px 30px;
      border-right: 1px solid #bbb;
      box-shadow: 0 0 20px #ccc; -webkit-box-shadow: 0 0 20px #ccc; -moz-box-shadow: 0 0 20px #ccc;
    }
      a.toc_title, a.toc_title:visited {
        display: block;
        color: black;
        font-weight: bold;
        margin-top: 15px;
      }
        a.toc_title:hover {
          text-decoration: underline;
        }
        #sidebar .version {
          font-size: 10px;
          font-weight: normal;
        }
      ul.toc_section {
        font-size: 11px;
        line-height: 14px;
        margin: 5px 0 0 0;
        padding-left: 0px;
        list-style-type: none;
        font-family: "Lucida Grande", "Lucida Sans Unicode", Helvetica, Arial, sans-serif;
      }
        .toc_section li {
          cursor: pointer;
          margin: 0 0 3px 0;
        }
          .toc_section li a {
            text-decoration: none;
            color: black;
          }
            .toc_section li a:hover {
              text-decoration: underline;
            }
      input#function_filter {
        width: 80%;
      }
    div.container {
      position: relative;
      width: 550px;
      margin: 40px 0 50px 260px;
    }
    img#logo {
      width: 450px;
      height: 80px;
    }
    div.run {
      position: absolute;
      right: 15px;
      width: 26px; height: 18px;
      background: url('docs/images/arrows.png') no-repeat -26px 0;
    }
      div.run:active {
        background-position: -51px 0;
      }
    p, div.container ul {
      margin: 25px 0;
      width: 550px;
    }
      p.warning {
        font-size: 12px;
        line-height: 18px;
        font-style: italic;
      }
      div.container ul {
        list-style: circle;
        padding-left: 15px;
        font-size: 13px;
        line-height: 18px;
      }
        div.container ul li {
          margin-bottom: 10px;
        }
        div.container ul.small {
          font-size: 12px;
        }
    a, a:visited {
      color: #444;
    }
    a:active, a:hover {
      color: #000;
    }
    a.punch {
      display: inline-block;
      background: #4162a8;
      border-top: 1px solid #38538c;
      border-right: 1px solid #1f2d4d;
      border-bottom: 1px solid #151e33;
      border-left: 1px solid #1f2d4d;
      -webkit-border-radius: 4px;
      -moz-border-radius: 4px;
      -ms-border-radius: 4px;
      -o-border-radius: 4px;
      border-radius: 4px;
      -webkit-box-shadow: inset 0 1px 10px 1px #5c8bee, 0px 1px 0 #1d2c4d, 0 6px 0px #1f3053, 0 8px 4px 1px #111111;
      -moz-box-shadow: inset 0 1px 10px 1px #5c8bee, 0px 1px 0 #1d2c4d, 0 6px 0px #1f3053, 0 8px 4px 1px #111111;
      -ms-box-shadow: inset 0 1px 10px 1px #5c8bee, 0px 1px 0 #1d2c4d, 0 6px 0px #1f3053, 0 8px 4px 1px #111111;
      -o-box-shadow: inset 0 1px 10px 1px #5c8bee, 0px 1px 0 #1d2c4d, 0 6px 0px #1f3053, 0 8px 4px 1px #111111;
      box-shadow: inset 0 1px 10px 1px #5c8bee, 0px 1px 0 #1d2c4d, 0 6px 0px #1f3053, 0 8px 4px 1px #111111;
      color: #fff;
      font: bold 14px "helvetica neue", helvetica, arial, sans-serif;
      line-height: 1;
      margin-bottom: 15px;
      padding: 8px 0 10px 0;
      text-align: center;
      text-shadow: 0px -1px 1px #1e2d4d;
      text-decoration: none;
      width: 225px;
      -webkit-background-clip: padding-box; }
      a.punch:hover {
        -webkit-box-shadow: inset 0 0px 20px 1px #87adff, 0px 1px 0 #1d2c4d, 0 6px 0px #1f3053, 0 8px 4px 1px #111111;
        -moz-box-shadow: inset 0 0px 20px 1px #87adff, 0px 1px 0 #1d2c4d, 0 6px 0px #1f3053, 0 8px 4px 1px #111111;
        -ms-box-shadow: inset 0 0px 20px 1px #87adff, 0px 1px 0 #1d2c4d, 0 6px 0px #1f3053, 0 8px 4px 1px #111111;
        -o-box-shadow: inset 0 0px 20px 1px #87adff, 0px 1px 0 #1d2c4d, 0 6px 0px #1f3053, 0 8px 4px 1px #111111;
        box-shadow: inset 0 0px 20px 1px #87adff, 0px 1px 0 #1d2c4d, 0 6px 0px #1f3053, 0 8px 4px 1px #111111;
        cursor: pointer; }
      a.punch:active {
        -webkit-box-shadow: inset 0 1px 10px 1px #5c8bee, 0 1px 0 #1d2c4d, 0 2px 0 #1f3053, 0 4px 3px 0 #111111;
        -moz-box-shadow: inset 0 1px 10px 1px #5c8bee, 0 1px 0 #1d2c4d, 0 2px 0 #1f3053, 0 4px 3px 0 #111111;
        -ms-box-shadow: inset 0 1px 10px 1px #5c8bee, 0 1px 0 #1d2c4d, 0 2px 0 #1f3053, 0 4px 3px 0 #111111;
        -o-box-shadow: inset 0 1px 10px 1px #5c8bee, 0 1px 0 #1d2c4d, 0 2px 0 #1f3053, 0 4px 3px 0 #111111;
        box-shadow: inset 0 1px 10px 1px #5c8bee, 0 1px 0 #1d2c4d, 0 2px 0 #1f3053, 0 4px 3px 0 #111111;
        margin-top: 5px; margin-bottom: 10px; }
    a img {
      border: 0;
    }
    a.travis-badge {
      display: block;
    }
    h1, h2, h3, h4, h5, h6 {
      padding-top: 20px;
    }
      h2 {
        font-size: 22px;
      }
    b.header {
      font-size: 18px;
      line-height: 35px;
    }
    span.alias {
      font-size: 14px;
      font-style: italic;
      margin-left: 20px;
    }
    table {
      margin: 15px 0 0; padding: 0;
    }
      tr, td {
        margin: 0; padding: 0;
      }
        td {
          padding: 0px 15px 5px 0;
        }
        table .rule {
          height: 1px;
          background: #ccc;
          margin: 5px 0;
        }
    code, pre, tt {
      font-family: Monaco, Consolas, "Lucida Console", monospace;
      font-size: 12px;
      line-height: 18px;
      font-style: normal;
    }
      tt {
        padding: 0px 3px;
        background: #fff;
        border: 1px solid #ddd;
        zoom: 1;
      }
      code {
        margin-left: 20px;
      }
      pre {
        font-size: 12px;
        padding: 2px 0 2px 15px;
        border: 4px solid #bbb; border-top: 0; border-bottom: 0;
        margin: 0px 0 25px;
      }
      img.example_image {
        margin: 0px auto;
      }
        img.example_retina {
          margin: 20px;
          box-shadow: 0 8px 15px rgba(0,0,0,0.4);
        }
    @media only screen and (-webkit-max-device-pixel-ratio: 1) and (max-width: 600px),
           only screen and (max--moz-device-pixel-ratio: 1) and (max-width: 600px) {
      div#sidebar {
        display: none;
      }
      img#logo {
        max-width: 450px;
        width: 100%;
        height: auto;
      }
      div.container {
        width: auto;
        margin-left: 15px;
        margin-right: 15px;
      }
        p, div.container ul {
          width: auto;
        }
    }
    @media only screen and (-webkit-min-device-pixel-ratio: 1.5) and (max-width: 640px),
          only screen and (-o-min-device-pixel-ratio: 3/2) and (max-width: 640px),
          only screen and (min-device-pixel-ratio: 1.5) and (max-width: 640px) {
      img {
        max-width: 100%;
        height: auto;
      }
      div#sidebar {
        -webkit-overflow-scrolling: initial;
        position: relative;
        width: 90%;
        height: 120px;
        left: 0;
        top: -7px;
        padding: 10px 0 10px 30px;
        border: 0;
      }
      img#logo {
        width: auto;
        height: auto;
      }
      div.container {
        margin: 0;
        width: 100%;
      }
      p, div.container ul {
        max-width: 98%;
        overflow-x: scroll;
      }
      table {
        position: relative;
      }
        tr:first-child td {
          padding-bottom: 25px;
        }
        td.text {
          line-height: 12px;
          padding: 0;
          position: absolute;
          left: 0;
          top: 48px;
        }
        tr:last-child td.text {
          top: 122px;
        }
      pre {
        overflow: scroll;
      }
    }
    img.figure {
      width: 100%;
    }
    div.columns {
      display: table;
      table-layout: fixed;
      width: 100%;
    }
      div.columns ul {
        margin: 10px 0;
      }
    div.col-50 {
      display: table-cell;
      width: 50%;
    }
  </style>
</head>
<body>

  <div id="sidebar" class="interface">

    <a class="toc_title" href="http://backbonejs.org/#">
      Backbone.js <span class="version">(1.3.3)</span>
    </a>
    <ul class="toc_section">
      <li>» <a href="http://github.com/jashkenas/backbone">GitHub Repository</a></li>
      <li>» <a href="http://backbonejs.org/docs/backbone.html">Annotated Source</a></li>
    </ul>

    <input id="function_filter" placeholder="Filter" type="text" autofocus="">

    <div class="searchable_section">
      <a class="toc_title" href="http://backbonejs.org/#Getting-started">
        Getting Started
      </a>
      <ul class="toc_section">
        <li data-name="Introduction">- <a href="http://backbonejs.org/#Getting-started">Introduction</a></li>
        <li data-name="Models and Views">– <a href="http://backbonejs.org/#Model-View-separation">Models and Views</a></li>
        <li data-name="Collections">– <a href="http://backbonejs.org/#Model-Collections">Collections</a></li>
        <li data-name="API Integration">– <a href="http://backbonejs.org/#API-integration">API Integration</a></li>
        <li data-name="Rendering">– <a href="http://backbonejs.org/#View-rendering">Rendering</a></li>
        <li data-name="Routing">– <a href="http://backbonejs.org/#Routing">Routing</a></li>
      </ul>
    </div>

    <div class="searchable_section">
      <a class="toc_title" href="http://backbonejs.org/#Events">
        Events
      </a>
      <ul class="toc_section">
        <li data-name="on">– <a href="http://backbonejs.org/#Events-on">on</a></li>
        <li data-name="off">– <a href="http://backbonejs.org/#Events-off">off</a></li>
        <li data-name="trigger">– <a href="http://backbonejs.org/#Events-trigger">trigger</a></li>
        <li data-name="once">– <a href="http://backbonejs.org/#Events-once">once</a></li>
        <li data-name="listenTo">– <a href="http://backbonejs.org/#Events-listenTo">listenTo</a></li>
        <li data-name="stopListening">– <a href="http://backbonejs.org/#Events-stopListening">stopListening</a></li>
        <li data-name="listenToOnce">– <a href="http://backbonejs.org/#Events-listenToOnce">listenToOnce</a></li>
        <li data-name="Catalog of Built-in Events">- <a href="http://backbonejs.org/#Events-catalog"><b>Catalog of Built-in Events</b></a></li>
      </ul>
    </div>

    <div class="searchable_section">
      <a class="toc_title" href="http://backbonejs.org/#Model">
        Model
      </a>
      <ul class="toc_section">
        <li data-name="extend">– <a href="http://backbonejs.org/#Model-extend">extend</a></li>
        <li data-name="constructor / initialize">– <a href="http://backbonejs.org/#Model-constructor">constructor / initialize</a></li>
        <li data-name="get">– <a href="http://backbonejs.org/#Model-get">get</a></li>
        <li data-name="set">– <a href="http://backbonejs.org/#Model-set">set</a></li>
        <li data-name="escape">– <a href="http://backbonejs.org/#Model-escape">escape</a></li>
        <li data-name="has">– <a href="http://backbonejs.org/#Model-has">has</a></li>
        <li data-name="unset">– <a href="http://backbonejs.org/#Model-unset">unset</a></li>
        <li data-name="clear">– <a href="http://backbonejs.org/#Model-clear">clear</a></li>
        <li data-name="id">– <a href="http://backbonejs.org/#Model-id">id</a></li>
        <li data-name="idAttribute">– <a href="http://backbonejs.org/#Model-idAttribute">idAttribute</a></li>
        <li data-name="cid">– <a href="http://backbonejs.org/#Model-cid">cid</a></li>
        <li data-name="attributes">– <a href="http://backbonejs.org/#Model-attributes">attributes</a></li>
        <li data-name="changed">– <a href="http://backbonejs.org/#Model-changed">changed</a></li>
        <li data-name="defaults">– <a href="http://backbonejs.org/#Model-defaults">defaults</a></li>
        <li data-name="toJSON">– <a href="http://backbonejs.org/#Model-toJSON">toJSON</a></li>
        <li data-name="sync">– <a href="http://backbonejs.org/#Model-sync">sync</a></li>
        <li data-name="fetch">– <a href="http://backbonejs.org/#Model-fetch">fetch</a></li>
        <li data-name="save">– <a href="http://backbonejs.org/#Model-save">save</a></li>
        <li data-name="destroy">– <a href="http://backbonejs.org/#Model-destroy">destroy</a></li>
        <li data-name="Underscore Methods">– <a href="http://backbonejs.org/#Model-Underscore-Methods"><b>Underscore Methods (9)</b></a></li>
        <li data-name="validate">– <a href="http://backbonejs.org/#Model-validate">validate</a></li>
        <li data-name="validationError">– <a href="http://backbonejs.org/#Model-validationError">validationError</a></li>
        <li data-name="isValid">– <a href="http://backbonejs.org/#Model-isValid">isValid</a></li>
        <li data-name="url">– <a href="http://backbonejs.org/#Model-url">url</a></li>
        <li data-name="urlRoot">– <a href="http://backbonejs.org/#Model-urlRoot">urlRoot</a></li>
        <li data-name="parse">– <a href="http://backbonejs.org/#Model-parse">parse</a></li>
        <li data-name="clone">– <a href="http://backbonejs.org/#Model-clone">clone</a></li>
        <li data-name="isNew">– <a href="http://backbonejs.org/#Model-isNew">isNew</a></li>
        <li data-name="hasChanged">– <a href="http://backbonejs.org/#Model-hasChanged">hasChanged</a></li>
        <li data-name="changedAttributes">– <a href="http://backbonejs.org/#Model-changedAttributes">changedAttributes</a></li>
        <li data-name="previous">– <a href="http://backbonejs.org/#Model-previous">previous</a></li>
        <li data-name="previousAttributes">– <a href="http://backbonejs.org/#Model-previousAttributes">previousAttributes</a></li>
      </ul>
    </div>

    <div class="searchable_section">
      <a class="toc_title" href="http://backbonejs.org/#Collection">
        Collection
      </a>
      <ul class="toc_section">
        <li data-name="extend">– <a href="http://backbonejs.org/#Collection-extend">extend</a></li>
        <li data-name="model">– <a href="http://backbonejs.org/#Collection-model">model</a></li>
        <li data-name="modelId">– <a href="http://backbonejs.org/#Collection-modelId">modelId</a></li>
        <li data-name="constructor / initialize">– <a href="http://backbonejs.org/#Collection-constructor">constructor / initialize</a></li>
        <li data-name="models">– <a href="http://backbonejs.org/#Collection-models">models</a></li>
        <li data-name="toJSON">– <a href="http://backbonejs.org/#Collection-toJSON">toJSON</a></li>
        <li data-name="sync">– <a href="http://backbonejs.org/#Collection-sync">sync</a></li>
        <li data-name="Underscore Methods">– <a href="http://backbonejs.org/#Collection-Underscore-Methods"><b>Underscore Methods (46)</b></a></li>
        <li data-name="add">– <a href="http://backbonejs.org/#Collection-add">add</a></li>
        <li data-name="remove">– <a href="http://backbonejs.org/#Collection-remove">remove</a></li>
        <li data-name="reset">– <a href="http://backbonejs.org/#Collection-reset">reset</a></li>
        <li data-name="set">– <a href="http://backbonejs.org/#Collection-set">set</a></li>
        <li data-name="get">– <a href="http://backbonejs.org/#Collection-get">get</a></li>
        <li data-name="at">– <a href="http://backbonejs.org/#Collection-at">at</a></li>
        <li data-name="push">– <a href="http://backbonejs.org/#Collection-push">push</a></li>
        <li data-name="pop">– <a href="http://backbonejs.org/#Collection-pop">pop</a></li>
        <li data-name="unshift">– <a href="http://backbonejs.org/#Collection-unshift">unshift</a></li>
        <li data-name="shift">– <a href="http://backbonejs.org/#Collection-shift">shift</a></li>
        <li data-name="slice">– <a href="http://backbonejs.org/#Collection-slice">slice</a></li>
        <li data-name="length">– <a href="http://backbonejs.org/#Collection-length">length</a></li>
        <li data-name="comparator">– <a href="http://backbonejs.org/#Collection-comparator">comparator</a></li>
        <li data-name="sort">– <a href="http://backbonejs.org/#Collection-sort">sort</a></li>
        <li data-name="pluck">– <a href="http://backbonejs.org/#Collection-pluck">pluck</a></li>
        <li data-name="where">– <a href="http://backbonejs.org/#Collection-where">where</a></li>
        <li data-name="findWhere">– <a href="http://backbonejs.org/#Collection-findWhere">findWhere</a></li>
        <li data-name="url">– <a href="http://backbonejs.org/#Collection-url">url</a></li>
        <li data-name="parse">– <a href="http://backbonejs.org/#Collection-parse">parse</a></li>
        <li data-name="clone">– <a href="http://backbonejs.org/#Collection-clone">clone</a></li>
        <li data-name="fetch">– <a href="http://backbonejs.org/#Collection-fetch">fetch</a></li>
        <li data-name="create">– <a href="http://backbonejs.org/#Collection-create">create</a></li>
      </ul>
    </div>

    <div class="searchable_section">
      <a class="toc_title" href="http://backbonejs.org/#Router">
        Router
      </a>
      <ul class="toc_section">
        <li data-name="extend">– <a href="http://backbonejs.org/#Router-extend">extend</a></li>
        <li data-name="routes">– <a href="http://backbonejs.org/#Router-routes">routes</a></li>
        <li data-name="constructor / initialize">– <a href="http://backbonejs.org/#Router-constructor">constructor / initialize</a></li>
        <li data-name="route">– <a href="http://backbonejs.org/#Router-route">route</a></li>
        <li data-name="navigate">– <a href="http://backbonejs.org/#Router-navigate">navigate</a></li>
        <li data-name="execute">– <a href="http://backbonejs.org/#Router-execute">execute</a></li>
      </ul>
    </div>

    <div class="searchable_section">
      <a class="toc_title" href="http://backbonejs.org/#History">
        History
      </a>
      <ul class="toc_section">
        <li data-name="start">– <a href="http://backbonejs.org/#History-start">start</a></li>
      </ul>
    </div>

    <div class="searchable_section">
      <a class="toc_title" href="http://backbonejs.org/#Sync">
        Sync
      </a>
      <ul class="toc_section">
        <li data-name="Backbone.sync">– <a href="http://backbonejs.org/#Sync">Backbone.sync</a></li>
        <li data-name="Backbone.ajax">– <a href="http://backbonejs.org/#Sync-ajax">Backbone.ajax</a></li>
        <li data-name="Backbone.emulateHTTP">– <a href="http://backbonejs.org/#Sync-emulateHTTP">Backbone.emulateHTTP</a></li>
        <li data-name="Backbone.emulateJSON">– <a href="http://backbonejs.org/#Sync-emulateJSON">Backbone.emulateJSON</a></li>
      </ul>
    </div>

    <div class="searchable_section">
      <a class="toc_title" href="http://backbonejs.org/#View">
        View
      </a>
      <ul class="toc_section">
        <li data-name="extend">– <a href="http://backbonejs.org/#View-extend">extend</a></li>
        <li data-name="constructor / initialize">– <a href="http://backbonejs.org/#View-constructor">constructor / initialize</a></li>
        <li data-name="el">– <a href="http://backbonejs.org/#View-el">el</a></li>
        <li data-name="$el">– <a href="http://backbonejs.org/#View-$el">$el</a></li>
        <li data-name="setElement">– <a href="http://backbonejs.org/#View-setElement">setElement</a></li>
        <li data-name="attributes">– <a href="http://backbonejs.org/#View-attributes">attributes</a></li>
        <li data-name="$ (jQuery)">– <a href="http://backbonejs.org/#View-dollar">$ (jQuery)</a></li>
        <li data-name="template">– <a href="http://backbonejs.org/#View-template">template</a></li>
        <li data-name="render">– <a href="http://backbonejs.org/#View-render">render</a></li>
        <li data-name="remove">– <a href="http://backbonejs.org/#View-remove">remove</a></li>
        <li data-name="events">– <a href="http://backbonejs.org/#View-events">events</a></li>
        <li data-name="delegateEvents">– <a href="http://backbonejs.org/#View-delegateEvents">delegateEvents</a></li>
        <li data-name="undelegateEvents">– <a href="http://backbonejs.org/#View-undelegateEvents">undelegateEvents</a></li>
      </ul>
    </div>

    <div class="searchable_section">
      <a class="toc_title" href="http://backbonejs.org/#Utility">
        Utility
      </a>
      <ul class="toc_section">
        <li data-name="Backbone.noConflict">– <a href="http://backbonejs.org/#Utility-Backbone-noConflict">Backbone.noConflict</a></li>
        <li data-name="Backbone.$">– <a href="http://backbonejs.org/#Utility-Backbone-$">Backbone.$</a></li>
      </ul>
    </div>

    <div class="searchable_section">
      <a class="toc_title" href="http://backbonejs.org/#faq">
        F.A.Q.
      </a>
      <ul class="toc_section">
        <li data-name="Why Backbone?">– <a href="http://backbonejs.org/#FAQ-why-backbone">Why Backbone?</a></li>
        <li data-name="More Than One Way To Do It">– <a href="http://backbonejs.org/#FAQ-tim-toady">More Than One Way To Do It</a></li>
        <li data-name="Nested Models and Collections">– <a href="http://backbonejs.org/#FAQ-nested">Nested Models &amp; Collections</a></li>
        <li data-name="Loading Bootstrapped Models">– <a href="http://backbonejs.org/#FAQ-bootstrap">Loading Bootstrapped Models</a></li>
        <li data-name="Extending Backbone">– <a href="http://backbonejs.org/#FAQ-extending">Extending Backbone</a></li>
        <li data-name="Traditional MVC">– <a href="http://backbonejs.org/#FAQ-mvc">Traditional MVC</a></li>
        <li data-name="Binding this">– <a href="http://backbonejs.org/#FAQ-this">Binding "this"</a></li>
        <li data-name="Working with Rails">– <a href="http://backbonejs.org/#FAQ-rails">Working with Rails</a></li>
      </ul>
    </div>

    <div class="searchable_section">
      <a class="toc_title" href="http://backbonejs.org/#examples">
        Examples
      </a>
      <ul class="toc_section">
        <li data-name="Todos">– <a href="http://backbonejs.org/#examples-todos">Todos</a></li>
        <li data-name="DocumentCloud">– <a href="http://backbonejs.org/#examples-documentcloud">DocumentCloud</a></li>
        <li data-name="USA Today">– <a href="http://backbonejs.org/#examples-usa-today">USA Today</a></li>
        <li data-name="Rdio">– <a href="http://backbonejs.org/#examples-rdio">Rdio</a></li>
        <li data-name="Hulu">– <a href="http://backbonejs.org/#examples-hulu">Hulu</a></li>
        <li data-name="Quartz">– <a href="http://backbonejs.org/#examples-quartz">Quartz</a></li>
        <li data-name="Earth">– <a href="http://backbonejs.org/#examples-earth">Earth</a></li>
        <li data-name="Vox">– <a href="http://backbonejs.org/#examples-vox">Vox</a></li>
        <li data-name="Gawker Media">– <a href="http://backbonejs.org/#examples-gawker">Gawker Media</a></li>
        <li data-name="Flow">– <a href="http://backbonejs.org/#examples-flow">Flow</a></li>
        <li data-name="Gilt Groupe">– <a href="http://backbonejs.org/#examples-gilt">Gilt Groupe</a></li>
        <li data-name="Enigma">– <a href="http://backbonejs.org/#examples-enigma">Enigma</a></li>
        <li data-name="NewsBlur">– <a href="http://backbonejs.org/#examples-newsblur">NewsBlur</a></li>
        <li data-name="WordPress.com">– <a href="http://backbonejs.org/#examples-wordpress">WordPress.com</a></li>
        <li data-name="Foursquare">– <a href="http://backbonejs.org/#examples-foursquare">Foursquare</a></li>
        <li data-name="Bitbucket">– <a href="http://backbonejs.org/#examples-bitbucket">Bitbucket</a></li>
        <li data-name="Disqus">– <a href="http://backbonejs.org/#examples-disqus">Disqus</a></li>
        <li data-name="Delicious">– <a href="http://backbonejs.org/#examples-delicious">Delicious</a></li>
        <li data-name="Khan Academy">– <a href="http://backbonejs.org/#examples-khan-academy">Khan Academy</a></li>
        <li data-name="IRCCloud">– <a href="http://backbonejs.org/#examples-irccloud">IRCCloud</a></li>
        <li data-name="Pitchfork">– <a href="http://backbonejs.org/#examples-pitchfork">Pitchfork</a></li>
        <li data-name="Spin">– <a href="http://backbonejs.org/#examples-spin">Spin</a></li>
        <li data-name="ZocDoc">– <a href="http://backbonejs.org/#examples-zocdoc">ZocDoc</a></li>
        <li data-name="Walmart Mobile">– <a href="http://backbonejs.org/#examples-walmart">Walmart Mobile</a></li>
        <li data-name="Groupon Now!">– <a href="http://backbonejs.org/#examples-groupon">Groupon Now!</a></li>
        <li data-name="Basecamp">– <a href="http://backbonejs.org/#examples-basecamp">Basecamp</a></li>
        <li data-name="Slavery Footprint">– <a href="http://backbonejs.org/#examples-slavery-footprint">Slavery Footprint</a></li>
        <li data-name="Stripe">– <a href="http://backbonejs.org/#examples-stripe">Stripe</a></li>
        <li data-name="Airbnb">– <a href="http://backbonejs.org/#examples-airbnb">Airbnb</a></li>
        <li data-name="SoundCloud Mobile">– <a href="http://backbonejs.org/#examples-soundcloud">SoundCloud Mobile</a></li>
        <li data-name="Art.sy">- <a href="http://backbonejs.org/#examples-artsy">Art.sy</a></li>
        <li data-name="Pandora">– <a href="http://backbonejs.org/#examples-pandora">Pandora</a></li>
        <li data-name="Inkling">– <a href="http://backbonejs.org/#examples-inkling">Inkling</a></li>
        <li data-name="Code School">– <a href="http://backbonejs.org/#examples-code-school">Code School</a></li>
        <li data-name="CloudApp">– <a href="http://backbonejs.org/#examples-cloudapp">CloudApp</a></li>
        <li data-name="SeatGeek">– <a href="http://backbonejs.org/#examples-seatgeek">SeatGeek</a></li>
        <li data-name="Easel">– <a href="http://backbonejs.org/#examples-easel">Easel</a></li>
        <li data-name="Jolicloud">- <a href="http://backbonejs.org/#examples-jolicloud">Jolicloud</a></li>
        <li data-name="Salon.io">– <a href="http://backbonejs.org/#examples-salon">Salon.io</a></li>
        <li data-name="TileMill">– <a href="http://backbonejs.org/#examples-tilemill">TileMill</a></li>
        <li data-name="Blossom">– <a href="http://backbonejs.org/#examples-blossom">Blossom</a></li>
        <li data-name="Trello">– <a href="http://backbonejs.org/#examples-trello">Trello</a></li>
        <li data-name="Tzigla">– <a href="http://backbonejs.org/#examples-tzigla">Tzigla</a></li>
      </ul>
    </div>

    <div class="searchable_section">
      <a class="toc_title" href="http://backbonejs.org/#changelog">
        Change Log
      </a>
    </div>

  </div>

  <div class="container">

    <p>
      <img id="logo" src="./Backbone_files/backbone.png" alt="Backbone.js">
    </p>

    <p>
      Backbone.js gives structure to web applications
      by providing <b>models</b> with key-value binding and custom events,
      <b>collections</b> with a rich API of enumerable functions,
      <b>views</b> with declarative event handling, and connects it all to your
      existing API over a RESTful JSON interface.
    </p>

    <p>
      The project is <a href="http://github.com/jashkenas/backbone/">hosted on GitHub</a>,
      and the <a href="http://backbonejs.org/docs/backbone.html">annotated source code</a> is available,
      as well as an online <a href="http://backbonejs.org/test/">test suite</a>,
      an <a href="http://backbonejs.org/examples/todos/index.html">example application</a>,
      a <a href="https://github.com/jashkenas/backbone/wiki/Tutorials%2C-blog-posts-and-example-sites">list of tutorials</a>
      and a <a href="http://backbonejs.org/#examples">long list of real-world projects</a> that use Backbone.
      Backbone is available for use under the <a href="http://github.com/jashkenas/backbone/blob/master/LICENSE">MIT software license</a>.
    </p>

    <p>
      You can report bugs and discuss features on the
      <a href="http://github.com/jashkenas/backbone/issues">GitHub issues page</a>,
      on Freenode IRC in the <tt>#documentcloud</tt> channel, post questions to the
      <a href="https://groups.google.com/forum/#!forum/backbonejs">Google Group</a>,
      add pages to the <a href="https://github.com/jashkenas/backbone/wiki">wiki</a>
      or send tweets to <a href="http://twitter.com/documentcloud">@documentcloud</a>.
    </p>

    <p>
      <i>
        Backbone is an open-source component of
        <a href="http://documentcloud.org/">DocumentCloud</a>.
      </i>
    </p>

    <h2 id="downloads">
      Downloads &amp; Dependencies
      <span style="padding-left: 7px; font-size:11px; font-weight: normal;" class="interface">(Right-click, and use "Save As")</span>
    </h2>

    <table>
      <tbody><tr>
        <td><a class="punch" href="./Backbone_files/backbone.js.download">Development Version (1.3.3)</a></td>
        <td class="text"><i>72kb, Full source, tons of comments</i></td>
      </tr>
      <tr>
        <td><a class="punch" href="http://backbonejs.org/backbone-min.js">Production Version (1.3.3)</a></td>
        <td class="text" style="line-height: 16px;">
          <i>7.6kb, Packed and gzipped</i><br>
          <small>(<a href="http://backbonejs.org/backbone-min.map">Source Map</a>)</small>
        </td>
      </tr>
      <tr>
        <td><a class="punch" href="https://raw.github.com/jashkenas/backbone/master/backbone.js">Edge Version (master)</a></td>
        <td>
          <i>Unreleased, use at your own risk</i>
          <a class="travis-badge" href="https://travis-ci.org/jashkenas/backbone">
            <img src="./Backbone_files/backbone(1).png">
          </a>
        </td>
      </tr>
    </tbody></table>

    <p>
      Backbone's only hard dependency is
      <a href="http://underscorejs.org/">Underscore.js</a> <small>( &gt;= 1.8.3)</small>.
      For RESTful persistence and DOM manipulation with <a href="http://backbonejs.org/#View">Backbone.View</a>,
      include <b><a href="https://jquery.com/">jQuery</a></b> ( &gt;= 1.11.0), and
      <b><a href="https://github.com/douglascrockford/JSON-js">json2.js</a></b> for older
      Internet Explorer support.
      <i>(Mimics of the Underscore and jQuery APIs, such as
      <a href="https://lodash.com/">Lodash</a> and
      <a href="http://zeptojs.com/">Zepto</a>, will
      also tend to work, with varying degrees of compatibility.)</i>
    </p>
    <h2 id="Getting-started">Getting Started</h2>

    <p>
      When working on a web application that involves a lot of JavaScript, one
      of the first things you learn is to stop tying your data to the DOM. It's all
      too easy to create JavaScript applications that end up as tangled piles of
      jQuery selectors and callbacks, all trying frantically to keep data in
      sync between the HTML UI, your JavaScript logic, and the database on your
      server. For rich client-side applications, a more structured approach
      is often helpful.
    </p>

    <p>
      With Backbone, you represent your data as
      <a href="http://backbonejs.org/#Model">Models</a>, which can be created, validated, destroyed,
      and saved to the server. Whenever a UI action causes an attribute of
      a model to change, the model triggers a <i>"change"</i> event; all
      the <a href="http://backbonejs.org/#View">Views</a> that display the model's state can be notified of the
      change, so that they are able to respond accordingly, re-rendering themselves with
      the new information. In a finished Backbone app, you don't have to write the glue
      code that looks into the DOM to find an element with a specific <i>id</i>,
      and update the HTML manually
      — when the model changes, the views simply update themselves.
    </p>

    <p>
      Philosophically, Backbone is an attempt to discover the minimal set
      of data-structuring (models and collections) and user interface (views
      and URLs) primitives that are generally useful when building web applications with
      JavaScript. In an ecosystem where overarching, decides-everything-for-you
      frameworks are commonplace, and many libraries require your site to be
      reorganized to suit their look, feel, and default behavior — Backbone should
      continue to be a tool that gives you the <i>freedom</i> to design the full
      experience of your web application.
    </p>

    <p>
      If you're new here, and aren't yet quite sure what Backbone is for, start by
      browsing the <a href="http://backbonejs.org/#examples">list of Backbone-based projects</a>.
    </p>

    <p>
      Many of the code examples in this documentation are runnable, because
      Backbone is included on this page.
      Click the <i>play</i> button to execute them.
    </p>

    <h2 id="Model-View-separation">Models and Views</h2>

    <img class="figure" src="./Backbone_files/intro-model-view.svg" alt="Model-View Separation.">

    <p>
      The single most important thing that Backbone can help you with is keeping
      your business logic separate from your user interface. When the two are
      entangled, change is hard; when logic doesn't depend on UI, your
      interface becomes easier to work with.
    </p>

    <div class="columns">
      <div class="col-50">
        <b>Model</b>
        <ul>
          <li>Orchestrates data and business logic.</li>
          <li>Loads and saves from the server.</li>
          <li>Emits events when data changes.</li>
        </ul>
      </div>
      <div class="col-50">
        <b>View</b>
        <ul>
          <li>Listens for changes and renders UI.</li>
          <li>Handles user input and interactivity.</li>
          <li>Sends captured input to the model.</li>
        </ul>
      </div>
    </div>

    <p>
      A <b>Model</b> manages an internal table of data attributes, and
      triggers <tt>"change"</tt> events when any of its data is modified.
      Models handle syncing data with a persistence layer — usually a REST API
      with a backing database. Design your models as the atomic reusable objects
      containing all of the helpful functions for manipulating their particular
      bit of data. Models should be able to be passed around throughout your app,
      and used anywhere that bit of data is needed.
    </p>

    <p>
      A <b>View</b> is an atomic chunk of user interface. It often renders the
      data from a specific model, or number of models — but views can
      also be data-less chunks of UI that stand alone.
      Models should be generally unaware of views. Instead, views listen to
      the model <tt>"change"</tt> events, and react or re-render themselves
      appropriately.
    </p>

    <h2 id="Model-Collections">Collections</h2>

    <img class="figure" src="./Backbone_files/intro-collections.svg" alt="Model Collections.">

    <p>
      A <b>Collection</b> helps you deal with a group of related models, handling
      the loading and saving of new models to the server and providing helper
      functions for performing aggregations or computations against a list of models.
      Aside from their own events, collections also proxy through all of the
      events that occur to models within them, allowing you to listen in one place
      for any change that might happen to any model in the collection.
    </p>

    <h2 id="API-integration">API Integration</h2>

    <p>
      Backbone is pre-configured to sync with a RESTful API. Simply create a
      new Collection with the <tt>url</tt> of your resource endpoint:
    </p>

<pre>var Books = Backbone.Collection.extend({
  url: '/books'
});
</pre>

    <p>
      The <b>Collection</b> and <b>Model</b> components together form a direct
      mapping of REST resources using the following methods:
    </p>

<pre>GET  /books/ .... collection.fetch();
POST /books/ .... collection.create();
GET  /books/1 ... model.fetch();
PUT  /books/1 ... model.save();
DEL  /books/1 ... model.destroy();
</pre>

    <p>
      When fetching raw JSON data from an API, a <b>Collection</b> will
      automatically populate itself with data formatted as an array, while
      a <b>Model</b> will automatically populate itself with data formatted
      as an object:
    </p>

<pre>[{"id": 1}] ..... populates a Collection with one model.
{"id": 1} ....... populates a Model with one attribute.
</pre>

    <p>
      However, it's fairly common to encounter APIs that return data in a
      different format than what Backbone expects. For example, consider
      fetching a <b>Collection</b> from an API that returns the real data
      array wrapped in metadata:
    </p>

<pre>{
  "page": 1,
  "limit": 10,
  "total": 2,
  "books": [
    {"id": 1, "title": "Pride and Prejudice"},
    {"id": 4, "title": "The Great Gatsby"}
  ]
}
</pre>

    <p>
      In the above example data, a <b>Collection</b> should populate using the
      <tt>"books"</tt> array rather than the root object structure. This
      difference is easily reconciled using a <tt>parse</tt> method that
      returns (or transforms) the desired portion of API data:
    </p>

<pre>var Books = Backbone.Collection.extend({
  url: '/books',
  parse: function(data) {
    return data.books;
  }
});
</pre>

    <h2 id="View-rendering">View Rendering</h2>

    <img class="figure" src="./Backbone_files/intro-views.svg" alt="View rendering.">

    <p>
      Each <b>View</b> manages the rendering and user interaction within its own
      DOM element. If you're strict about not allowing views to reach outside
      of themselves, it helps keep your interface flexible — allowing
      views to be rendered in isolation in any place where they might be needed.
    </p>

    <p>
      Backbone remains unopinionated about the process used to render <b>View</b>
      objects and their subviews into UI: you define how your models get translated
      into HTML (or SVG, or Canvas, or something even more exotic).
      It could be as prosaic as a simple
      <a href="http://underscorejs.org/#template">Underscore template</a>, or as fancy as the
      <a href="http://facebook.github.io/react/docs/tutorial.html">React virtual DOM</a>.
      Some basic approaches to rendering views can be found
      in the <a href="https://github.com/jashkenas/backbone/wiki/Backbone%2C-The-Primer">Backbone primer</a>.
    </p>

    <h2 id="Routing">Routing with URLs</h2>

    <img class="figure" src="./Backbone_files/intro-routing.svg" alt="Routing">

    <p>
      In rich web applications, we still want to provide linkable,
      bookmarkable, and shareable URLs to meaningful locations within an app.
      Use the <b>Router</b> to update the browser URL whenever the user
      reaches a new "place" in your app that they might want to bookmark or share.
      Conversely, the <b>Router</b> detects changes to the URL — say,
      pressing the "Back" button — and can tell your application exactly where you
      are now.
    </p>

    <h2 id="Events">Backbone.Events</h2>

    <p>
      <b>Events</b> is a module that can be mixed in to any object, giving the
      object the ability to bind and trigger custom named events. Events do not
      have to be declared before they are bound, and may take passed arguments.
      For example:
    </p>

<div class="run" title="Run"></div><pre class="runnable">var object = {};

_.extend(object, Backbone.Events);

object.on("alert", function(msg) {
  alert("Triggered " + msg);
});

object.trigger("alert", "an event");
</pre>

    <p>
      For example, to make a handy event dispatcher that can coordinate events
      among different areas of your application: <tt>var dispatcher = _.clone(Backbone.Events)</tt>
    </p>

    <p id="Events-on">
      <b class="header">on</b><code>object.on(event, callback, [context])</code><span class="alias">Alias: bind</span>
      <br>
      Bind a <b>callback</b> function to an object. The callback will be invoked
      whenever the <b>event</b> is fired.
      If you have a large number of different events on a page, the convention is to use colons to
      namespace them: <tt>"poll:start"</tt>, or <tt>"change:selection"</tt>.
      The event string may also be a space-delimited list of several events...
    </p>

<pre>book.on("change:title change:author", ...);
</pre>

    <p>
      Callbacks bound to the special
      <tt>"all"</tt> event will be triggered when any event occurs, and are passed
      the name of the event as the first argument. For example, to proxy all events
      from one object to another:
    </p>

<pre>proxy.on("all", function(eventName) {
  object.trigger(eventName);
});
</pre>

    <p>
      All Backbone event methods also support an event map syntax, as an alternative
      to positional arguments:
    </p>

<pre>book.on({
  "change:author": authorPane.update,
  "change:title change:subtitle": titleView.update,
  "destroy": bookView.remove
});
</pre>

    <p>
      To supply a <b>context</b> value for <tt>this</tt> when the callback is invoked,
      pass the optional last argument: <tt>model.on('change', this.render, this)</tt> or
      <tt>model.on({change: this.render}, this)</tt>.
    </p>

    <p id="Events-off">
      <b class="header">off</b><code>object.off([event], [callback], [context])</code><span class="alias">Alias: unbind</span>
      <br>
      Remove a previously-bound <b>callback</b> function from an object. If no
      <b>context</b> is specified, all of the versions of the callback with
      different contexts will be removed. If no
      callback is specified, all callbacks for the <b>event</b> will be
      removed. If no event is specified, callbacks for <i>all</i> events
      will be removed.
    </p>

<pre>// Removes just the `onChange` callback.
object.off("change", onChange);

// Removes all "change" callbacks.
object.off("change");

// Removes the `onChange` callback for all events.
object.off(null, onChange);

// Removes all callbacks for `context` for all events.
object.off(null, null, context);

// Removes all callbacks on `object`.
object.off();
</pre>

    <p>
      Note that calling <tt>model.off()</tt>, for example, will indeed remove <i>all</i> events
      on the model — including events that Backbone uses for internal bookkeeping.
    </p>

    <p id="Events-trigger">
      <b class="header">trigger</b><code>object.trigger(event, [*args])</code>
      <br>
      Trigger callbacks for the given <b>event</b>, or space-delimited list of events.
      Subsequent arguments to <b>trigger</b> will be passed along to the
      event callbacks.
    </p>

    <p id="Events-once">
      <b class="header">once</b><code>object.once(event, callback, [context])</code>
      <br>
      Just like <a href="http://backbonejs.org/#Events-on">on</a>, but causes the bound callback to fire
      only once before being removed. Handy for saying "the next time that X happens, do this".
      When multiple events are passed in using the space separated syntax, the event will fire once
      for every event you passed in, not once for a combination of all events
    </p>

    <p id="Events-listenTo">
      <b class="header">listenTo</b><code>object.listenTo(other, event, callback)</code>
      <br>
      Tell an <b>object</b> to listen to a particular event on an <b>other</b>
      object.  The advantage of using this form, instead of <tt>other.on(event,
      callback, object)</tt>, is that <b>listenTo</b> allows the <b>object</b>
      to keep track of the events, and they can be removed all at once later
      on.  The <b>callback</b> will always be called with <b>object</b> as
      context.
    </p>

<pre>view.listenTo(model, 'change', view.render);
</pre>

    <p id="Events-stopListening">
      <b class="header">stopListening</b><code>object.stopListening([other], [event], [callback])</code>
      <br>
      Tell an <b>object</b> to stop listening to events. Either call
      <b>stopListening</b> with no arguments to have the <b>object</b> remove
      all of its <a href="http://backbonejs.org/#Events-listenTo">registered</a> callbacks ... or be more
      precise by telling it to remove just the events it's listening to on a
      specific object, or a specific event, or just a specific callback.
    </p>

<pre>view.stopListening();

view.stopListening(model);
</pre>

    <p id="Events-listenToOnce">
      <b class="header">listenToOnce</b><code>object.listenToOnce(other, event, callback)</code>
      <br>
      Just like <a href="http://backbonejs.org/#Events-listenTo">listenTo</a>, but causes the bound
      callback to fire only once before being removed.
    </p>

    <p id="Events-catalog">
      <b class="header">Catalog of Events</b>
      <br>
      Here's the complete list of built-in Backbone events, with arguments.
      You're also free to trigger your own events on Models, Collections and
      Views as you see fit. The <tt>Backbone</tt> object itself mixes in <tt>Events</tt>,
      and can be used to emit any global events that your application needs.
    </p>

    <ul class="small">
      <li><b>"add"</b> (model, collection, options) — when a model is added to a collection.</li>
      <li><b>"remove"</b> (model, collection, options) — when a model is removed from a collection.</li>
      <li><b>"update"</b> (collection, options) — single event triggered after any number of models have been added or removed from a collection.</li>
      <li><b>"reset"</b> (collection, options) — when the collection's entire contents have been <a href="http://backbonejs.org/#Collection-reset">reset</a>.</li>
      <li><b>"sort"</b> (collection, options) — when the collection has been re-sorted.</li>
      <li><b>"change"</b> (model, options) — when a model's attributes have changed.</li>
      <li><b>"change:[attribute]"</b> (model, value, options) — when a specific attribute has been updated.</li>
      <li><b>"destroy"</b> (model, collection, options) — when a model is <a href="http://backbonejs.org/#Model-destroy">destroyed</a>.</li>
      <li><b>"request"</b> (model_or_collection, xhr, options) — when a model or collection has started a request to the server.</li>
      <li><b>"sync"</b> (model_or_collection, response, options) — when a model or collection has been successfully synced with the server.</li>
      <li><b>"error"</b> (model_or_collection, response, options) — when a model's or collection's request to the server has failed.</li>
      <li><b>"invalid"</b> (model, error, options) — when a model's <a href="http://backbonejs.org/#Model-validate">validation</a> fails on the client.</li>
      <li><b>"route:[name]"</b> (params) — Fired by the router when a specific route is matched.</li>
      <li><b>"route"</b> (route, params) — Fired by the router when <i>any</i> route has been matched.</li>
      <li><b>"route"</b> (router, route, params) — Fired by history when <i>any</i> route has been matched.</li>
      <li><b>"all"</b> — this special event fires for <i>any</i> triggered event, passing the event name as the first argument followed by all trigger arguments.</li>
    </ul>

    <p>
      Generally speaking, when calling a function that emits an event
      (<tt>model.set</tt>, <tt>collection.add</tt>, and so on...),
      if you'd like to prevent the event from being triggered, you may pass
      <tt>{silent: true}</tt> as an option. Note that this is <i>rarely</i>,
      perhaps even never, a good idea. Passing through a specific flag
      in the options for your event callback to look at, and choose to ignore,
      will usually work out better.
    </p>

    <h2 id="Model">Backbone.Model</h2>

    <p>
      <b>Models</b> are the heart of any JavaScript application, containing
      the interactive data as well as a large part of the logic surrounding it:
      conversions, validations, computed properties, and access control. You
      extend <b>Backbone.Model</b> with your domain-specific methods, and
      <b>Model</b> provides a basic set of functionality for managing changes.
    </p>

    <p>
      The following is a contrived example, but it demonstrates defining a model
      with a custom method, setting an attribute, and firing an event keyed
      to changes in that specific attribute.
      After running this code once, <tt>sidebar</tt> will be
      available in your browser's console, so you can play around with it.
    </p>

<div class="run" title="Run"></div><pre class="runnable">var Sidebar = Backbone.Model.extend({
  promptColor: function() {
    var cssColor = prompt("Please enter a CSS color:");
    this.set({color: cssColor});
  }
});

window.sidebar = new Sidebar;

sidebar.on('change:color', function(model, color) {
  $('#sidebar').css({background: color});
});

sidebar.set({color: 'white'});

sidebar.promptColor();
</pre>

    <p id="Model-extend">
      <b class="header">extend</b><code>Backbone.Model.extend(properties, [classProperties])</code>
      <br>
      To create a <b>Model</b> class of your own, you extend <b>Backbone.Model</b>
      and provide instance <b>properties</b>, as well as optional
      <b>classProperties</b> to be attached directly to the constructor function.
    </p>

    <p>
      <b>extend</b> correctly sets up the prototype chain, so subclasses created
      with <b>extend</b> can be further extended and subclassed as far as you like.
    </p>

<pre>var Note = Backbone.Model.extend({

  initialize: function() { ... },

  author: function() { ... },

  coordinates: function() { ... },

  allowedToEdit: function(account) {
    return true;
  }

});

var PrivateNote = Note.extend({

  allowedToEdit: function(account) {
    return account.owns(this);
  }

});
</pre>

    <p class="warning">
        Brief aside on <tt>super</tt>: JavaScript does not provide
        a simple way to call super — the function of the same name defined
        higher on the prototype chain. If you override a core function like
        <tt>set</tt>, or <tt>save</tt>, and you want to invoke the
        parent object's implementation, you'll have to explicitly call it, along these lines:
    </p>

<pre>var Note = Backbone.Model.extend({
  set: function(attributes, options) {
    Backbone.Model.prototype.set.apply(this, arguments);
    ...
  }
});
</pre>

    <p id="Model-constructor">
      <b class="header">constructor / initialize</b><code>new Model([attributes], [options])</code>
      <br>
      When creating an instance of a model, you can pass in the initial values
      of the <b>attributes</b>, which will be <a href="http://backbonejs.org/#Model-set">set</a> on the
      model. If you define an <b>initialize</b> function, it will be invoked when
      the model is created.
    </p>

<pre>new Book({
  title: "One Thousand and One Nights",
  author: "Scheherazade"
});
</pre>

    <p>
      In rare cases, if you're looking to get fancy,
      you may want to override <b>constructor</b>, which allows
      you to replace the actual constructor function for your model.
    </p>

<pre>var Library = Backbone.Model.extend({
  constructor: function() {
    this.books = new Books();
    Backbone.Model.apply(this, arguments);
  },
  parse: function(data, options) {
    this.books.reset(data.books);
    return data.library;
  }
});
</pre>

    <p>
      If you pass a <tt>{collection: ...}</tt> as the <b>options</b>, the model
      gains a <tt>collection</tt> property that will be used to indicate which
      collection the model belongs to, and is used to help compute the model's
      <a href="http://backbonejs.org/#Model-url">url</a>. The <tt>model.collection</tt> property is
      normally created automatically when you first add a model to a collection.
      Note that the reverse is not true, as passing this option to the constructor
      will not automatically add the model to the collection. Useful, sometimes.
    </p>

    <p>
      If <tt>{parse: true}</tt> is passed as an <b>option</b>, the <b>attributes</b>
      will first be converted by <a href="http://backbonejs.org/#Model-parse">parse</a> before being
      <a href="http://backbonejs.org/#Model-set">set</a> on the model.
    </p>

    <p id="Model-get">
      <b class="header">get</b><code>model.get(attribute)</code>
      <br>
      Get the current value of an attribute from the model. For example:
      <tt>note.get("title")</tt>
    </p>

    <p id="Model-set">
      <b class="header">set</b><code>model.set(attributes, [options])</code>
      <br>
      Set a hash of attributes (one or many) on the model. If any of the attributes
      change the model's state, a <tt>"change"</tt> event will be triggered on the model.
      Change events for specific attributes are also triggered, and you can bind
      to those as well, for example: <tt>change:title</tt>, and <tt>change:content</tt>.
      You may also pass individual keys and values.
    </p>

<pre>note.set({title: "March 20", content: "In his eyes she eclipses..."});

book.set("title", "A Scandal in Bohemia");
</pre>

    <p id="Model-escape">
      <b class="header">escape</b><code>model.escape(attribute)</code>
      <br>
      Similar to <a href="http://backbonejs.org/#Model-get">get</a>, but returns the HTML-escaped version
      of a model's attribute. If you're interpolating data from the model into
      HTML, using <b>escape</b> to retrieve attributes will prevent
      <a href="http://en.wikipedia.org/wiki/Cross-site_scripting">XSS</a> attacks.
    </p>

<div class="run" title="Run"></div><pre class="runnable">var hacker = new Backbone.Model({
  name: "&lt;script&gt;alert('xss')&lt;/script&gt;"
});

alert(hacker.escape('name'));
</pre>

    <p id="Model-has">
      <b class="header">has</b><code>model.has(attribute)</code>
      <br>
      Returns <tt>true</tt> if the attribute is set to a non-null or non-undefined
      value.
    </p>

<pre>if (note.has("title")) {
  ...
}
</pre>

    <p id="Model-unset">
      <b class="header">unset</b><code>model.unset(attribute, [options])</code>
      <br>
      Remove an attribute by deleting it from the internal attributes hash.
      Fires a <tt>"change"</tt> event unless <tt>silent</tt> is passed as an option.
    </p>

    <p id="Model-clear">
      <b class="header">clear</b><code>model.clear([options])</code>
      <br>
      Removes all attributes from the model, including the <tt>id</tt> attribute. Fires a <tt>"change"</tt> event unless
      <tt>silent</tt> is passed as an option.
    </p>

    <p id="Model-id">
      <b class="header">id</b><code>model.id</code>
      <br>
      A special property of models, the <b>id</b> is an arbitrary string
      (integer id or UUID). If you set the <b>id</b> in the
      attributes hash, it will be copied onto the model as a direct property.
      Models can be retrieved by id from collections, and the id is used to generate
      model URLs by default.
    </p>

    <p id="Model-idAttribute">
      <b class="header">idAttribute</b><code>model.idAttribute</code>
      <br>
      A model's unique identifier is stored under the <tt>id</tt> attribute.
      If you're directly communicating with a backend (CouchDB, MongoDB) that uses
      a different unique key, you may set a Model's <tt>idAttribute</tt> to
      transparently map from that key to <tt>id</tt>.

</p><div class="run" title="Run"></div><pre class="runnable">var Meal = Backbone.Model.extend({
  idAttribute: "_id"
});

var cake = new Meal({ _id: 1, name: "Cake" });
alert("Cake id: " + cake.id);
</pre>
    <p></p>

    <p id="Model-cid">
      <b class="header">cid</b><code>model.cid</code>
      <br>
      A special property of models, the <b>cid</b> or client id is a unique identifier
      automatically assigned to all models when they're first created. Client ids
      are handy when the model has not yet been saved to the server, and does not
      yet have its eventual true <b>id</b>, but already needs to be visible in the UI.
    </p>

    <p id="Model-attributes">
      <b class="header">attributes</b><code>model.attributes</code>
      <br>
      The <b>attributes</b> property is the internal hash containing the model's
      state — usually (but not necessarily) a form of the JSON object
      representing the model data on the server. It's often a straightforward
      serialization of a row from the database, but it could also be client-side
      computed state.
    </p>

    <p>
      Please use <a href="http://backbonejs.org/#Model-set">set</a> to update the <b>attributes</b>
      instead of modifying them directly. If you'd like to retrieve and munge a
      copy of the model's attributes, use <tt>_.clone(model.attributes)</tt>
      instead.
    </p>

    <p class="warning">
      Due to the fact that <a href="http://backbonejs.org/#Events">Events</a> accepts space separated
      lists of events, attribute names should not include spaces.
    </p>

    <p id="Model-changed">
      <b class="header">changed</b><code>model.changed</code>
      <br>
      The <b>changed</b> property is the internal hash containing all the attributes
      that have changed since its last <a href="http://backbonejs.org/#Model-set">set</a>.
      Please do not update <b>changed</b> directly since its state is internally maintained
      by <a href="http://backbonejs.org/#Model-set">set</a>.  A copy of <b>changed</b> can be acquired from
      <a href="http://backbonejs.org/#Model-changedAttributes">changedAttributes</a>.
    </p>

    <p id="Model-defaults">
      <b class="header">defaults</b><code>model.defaults or model.defaults()</code>
      <br>
      The <b>defaults</b> hash (or function) can be used to specify the default
      attributes for your model. When creating an instance of the model,
      any unspecified attributes will be set to their default value.
    </p>

<div class="run" title="Run"></div><pre class="runnable">var Meal = Backbone.Model.extend({
  defaults: {
    "appetizer":  "caesar salad",
    "entree":     "ravioli",
    "dessert":    "cheesecake"
  }
});

alert("Dessert will be " + (new Meal).get('dessert'));
</pre>

    <p class="warning">
      Remember that in JavaScript, objects are passed by reference, so if you
      include an object as a default value, it will be shared among all instances.
      Instead, define <b>defaults</b> as a function.
    </p>

    <p id="Model-toJSON">
      <b class="header">toJSON</b><code>model.toJSON([options])</code>
      <br>
      Return a shallow copy of the model's <a href="http://backbonejs.org/#Model-attributes">attributes</a>
      for JSON stringification.  This can be used for persistence,
      serialization, or for augmentation before being sent to the server. The
      name of this method is a bit confusing, as it doesn't actually return a
      JSON string — but I'm afraid that it's the way that the
      <a href="https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#toJSON_behavior">JavaScript API for <b>JSON.stringify</b></a>
      works.
    </p>

<div class="run" title="Run"></div><pre class="runnable">var artist = new Backbone.Model({
  firstName: "Wassily",
  lastName: "Kandinsky"
});

artist.set({birthday: "December 16, 1866"});

alert(JSON.stringify(artist));
</pre>

    <p id="Model-sync">
      <b class="header">sync</b><code>model.sync(method, model, [options])</code>
      <br>
      Uses <a href="http://backbonejs.org/#Sync">Backbone.sync</a> to persist the state of a model to
      the server.  Can be overridden for custom behavior.
    </p>

    <p id="Model-fetch">
      <b class="header">fetch</b><code>model.fetch([options])</code>
      <br>
      Merges the model's state with attributes fetched from the server by
      delegating to <a href="http://backbonejs.org/#Sync">Backbone.sync</a>. Returns a
      <a href="http://api.jquery.com/jQuery.ajax/#jqXHR">jqXHR</a>.
      Useful if the model has never
      been populated with data, or if you'd like to ensure that you have the
      latest server state. Triggers a <tt>"change"</tt> event if the
      server's state differs from the current attributes. <tt>fetch</tt> accepts
      <tt>success</tt> and <tt>error</tt> callbacks in the options hash, which
      are both passed <tt>(model, response, options)</tt> as arguments.
    </p>

<pre>// Poll every 10 seconds to keep the channel model up-to-date.
setInterval(function() {
  channel.fetch();
}, 10000);
</pre>

    <p id="Model-save">
      <b class="header">save</b><code>model.save([attributes], [options])</code>
      <br>
      Save a model to your database (or alternative persistence layer),
      by delegating to <a href="http://backbonejs.org/#Sync">Backbone.sync</a>.  Returns a
      <a href="http://api.jquery.com/jQuery.ajax/#jqXHR">jqXHR</a> if
      validation is successful and <tt>false</tt> otherwise. The <b>attributes</b>
      hash (as in <a href="http://backbonejs.org/#Model-set">set</a>) should contain the attributes
      you'd like to change — keys that aren't mentioned won't be altered — but,
      a <i>complete representation</i> of the resource will be sent to the server.
      As with <tt>set</tt>, you may pass individual keys and values instead of a hash.
      If the model has a <a href="http://backbonejs.org/#Model-validate">validate</a>
      method, and validation fails, the model will not be saved. If the model
      <a href="http://backbonejs.org/#Model-isNew">isNew</a>, the save will be a <tt>"create"</tt>
      (HTTP <tt>POST</tt>), if the model already
      exists on the server, the save will be an <tt>"update"</tt> (HTTP <tt>PUT</tt>).
    </p>

    <p>
      If instead, you'd only like the <i>changed</i> attributes to be sent to the
      server, call <tt>model.save(attrs, {patch: true})</tt>. You'll get an HTTP
      <tt>PATCH</tt> request to the server with just the passed-in attributes.
    </p>

    <p>
      Calling <tt>save</tt> with new attributes will cause a <tt>"change"</tt>
      event immediately, a <tt>"request"</tt> event as the Ajax request begins to
      go to the server, and a <tt>"sync"</tt> event after the server has acknowledged
      the successful change. Pass <tt>{wait: true}</tt> if you'd like to wait
      for the server before setting the new attributes on the model.
    </p>

    <p>
      In the following example, notice how our overridden version
      of <tt>Backbone.sync</tt> receives a <tt>"create"</tt> request
      the first time the model is saved and an <tt>"update"</tt>
      request the second time.
    </p>

<div class="run" title="Run"></div><pre class="runnable">Backbone.sync = function(method, model) {
  alert(method + ": " + JSON.stringify(model));
  model.set('id', 1);
};

var book = new Backbone.Model({
  title: "The Rough Riders",
  author: "Theodore Roosevelt"
});

book.save();

book.save({author: "Teddy"});
</pre>

    <p>
      <b>save</b> accepts <tt>success</tt> and <tt>error</tt> callbacks in the
      options hash, which will be passed the arguments <tt>(model, response, options)</tt>.
      If a server-side validation fails, return a non-<tt>200</tt>
      HTTP response code, along with an error response in text or JSON.
    </p>

<pre>book.save("author", "F.D.R.", {error: function(){ ... }});
</pre>

    <p id="Model-destroy">
      <b class="header">destroy</b><code>model.destroy([options])</code>
      <br>
      Destroys the model on the server by delegating an HTTP <tt>DELETE</tt>
      request to <a href="http://backbonejs.org/#Sync">Backbone.sync</a>. Returns a
      <a href="http://api.jquery.com/jQuery.ajax/#jqXHR">jqXHR</a> object, or
      <tt>false</tt> if the model <a href="http://backbonejs.org/#Model-isNew">isNew</a>. Accepts
      <tt>success</tt> and <tt>error</tt> callbacks in the options hash, which
      will be passed <tt>(model, response, options)</tt>.
      Triggers a <tt>"destroy"</tt> event on the model, which will bubble up
      through any collections that contain it, a <tt>"request"</tt> event as it
      begins the Ajax request to the server, and a <tt>"sync"</tt> event, after
      the server has successfully acknowledged the model's deletion. Pass
      <tt>{wait: true}</tt> if you'd like to wait for the server to respond
      before removing the model from the collection.
    </p>

<pre>book.destroy({success: function(model, response) {
  ...
}});
</pre>

    <p id="Model-Underscore-Methods">
      <b class="header">Underscore Methods (9)</b>
      <br>
      Backbone proxies to <b>Underscore.js</b> to provide 9 object functions
      on <b>Backbone.Model</b>. They aren't all documented here, but
      you can take a look at the Underscore documentation for the full details…
    </p>

    <ul class="small">
      <li><a href="http://underscorejs.org/#keys">keys</a></li>
      <li><a href="http://underscorejs.org/#values">values</a></li>
      <li><a href="http://underscorejs.org/#pairs">pairs</a></li>
      <li><a href="http://underscorejs.org/#invert">invert</a></li>
      <li><a href="http://underscorejs.org/#pick">pick</a></li>
      <li><a href="http://underscorejs.org/#omit">omit</a></li>
      <li><a href="http://underscorejs.org/#chain">chain</a></li>
      <li><a href="http://underscorejs.org/#isEmpty">isEmpty</a></li>
    </ul>

<pre>user.pick('first_name', 'last_name', 'email');

chapters.keys().join(', ');
</pre>

    <p id="Model-validate">
      <b class="header">validate</b><code>model.validate(attributes, options)</code>
      <br>
      This method is left undefined and you're encouraged to override it with
      any custom validation logic you have that can be performed in JavaScript.
      By default <tt>save</tt> checks <b>validate</b> before
      setting any attributes but you may also tell <tt>set</tt> to validate
      the new attributes by passing <tt>{validate: true}</tt> as an option.
      <br>
      The <b>validate</b> method receives the model attributes as well as any
      options passed to <tt>set</tt> or <tt>save</tt>.
      If the attributes are valid, don't return anything from <b>validate</b>;
      if they are invalid return an error of your choosing. It
      can be as simple as a string error message to be displayed, or a complete
      error object that describes the error programmatically. If <b>validate</b>
      returns an error, <tt>save</tt> will not continue, and the
      model attributes will not be modified on the server.
      Failed validations trigger an <tt>"invalid"</tt> event, and set the
      <tt>validationError</tt> property on the model with the value returned by
      this method.
    </p>

<div class="run" title="Run"></div><pre class="runnable">var Chapter = Backbone.Model.extend({
  validate: function(attrs, options) {
    if (attrs.end &lt; attrs.start) {
      return "can't end before it starts";
    }
  }
});

var one = new Chapter({
  title : "Chapter One: The Beginning"
});

one.on("invalid", function(model, error) {
  alert(model.get("title") + " " + error);
});

one.save({
  start: 15,
  end:   10
});
</pre>

    <p>
      <tt>"invalid"</tt> events are useful for providing coarse-grained error
      messages at the model or collection level.
    </p>

    <p id="Model-validationError">
      <b class="header">validationError</b><code>model.validationError</code>
      <br>
      The value returned by <a href="http://backbonejs.org/#Model-validate">validate</a> during the last failed validation.
    </p>

    <p id="Model-isValid">
      <b class="header">isValid</b><code>model.isValid()</code>
      <br>
      Run <a href="http://backbonejs.org/#Model-validate">validate</a> to check the model state.
    </p>

<div class="run" title="Run"></div><pre class="runnable">var Chapter = Backbone.Model.extend({
  validate: function(attrs, options) {
    if (attrs.end &lt; attrs.start) {
      return "can't end before it starts";
    }
  }
});

var one = new Chapter({
  title : "Chapter One: The Beginning"
});

one.set({
  start: 15,
  end:   10
});

if (!one.isValid()) {
  alert(one.get("title") + " " + one.validationError);
}
</pre>

    <p id="Model-url">
      <b class="header">url</b><code>model.url()</code>
      <br>
      Returns the relative URL where the model's resource would be located on
      the server. If your models are located somewhere else, override this method
      with the correct logic. Generates URLs of the form: <tt>"[collection.url]/[id]"</tt>
      by default, but you may override by specifying an explicit <tt>urlRoot</tt>
      if the model's collection shouldn't be taken into account.
    </p>

    <p>
      Delegates to <a href="http://backbonejs.org/#Collection-url">Collection#url</a> to generate the
      URL, so make sure that you have it defined, or a <a href="http://backbonejs.org/#Model-urlRoot">urlRoot</a>
      property, if all models of this class share a common root URL.
      A model with an id of <tt>101</tt>, stored in a
      <a href="http://backbonejs.org/#Collection">Backbone.Collection</a> with a <tt>url</tt> of <tt>"/documents/7/notes"</tt>,
      would have this URL: <tt>"/documents/7/notes/101"</tt>
    </p>

    <p id="Model-urlRoot">
      <b class="header">urlRoot</b><code>model.urlRoot or model.urlRoot()</code>
      <br>
      Specify a <tt>urlRoot</tt> if you're using a model <i>outside</i> of a collection,
      to enable the default <a href="http://backbonejs.org/#Model-url">url</a> function to generate
      URLs based on the model id. <tt>"[urlRoot]/id"</tt><br>
      Normally, you won't need to define this.
      Note that <tt>urlRoot</tt> may also be a function.
    </p>

<div class="run" title="Run"></div><pre class="runnable">var Book = Backbone.Model.extend({urlRoot : '/books'});

var solaris = new Book({id: "1083-lem-solaris"});

alert(solaris.url());
</pre>

    <p id="Model-parse">
      <b class="header">parse</b><code>model.parse(response, options)</code>
      <br>
      <b>parse</b> is called whenever a model's data is returned by the
      server, in <a href="http://backbonejs.org/#Model-fetch">fetch</a>, and <a href="http://backbonejs.org/#Model-save">save</a>.
      The function is passed the raw <tt>response</tt> object, and should return
      the attributes hash to be <a href="http://backbonejs.org/#Model-set">set</a> on the model. The
      default implementation is a no-op, simply passing through the JSON response.
      Override this if you need to work with a preexisting API, or better namespace
      your responses.
    </p>

    <p>
      If you're working with a Rails backend that has a version prior to 3.1,
      you'll notice that its default <tt>to_json</tt> implementation includes
      a model's attributes under a namespace. To disable this behavior for
      seamless Backbone integration, set:
    </p>

<pre>ActiveRecord::Base.include_root_in_json = false
</pre>

    <p id="Model-clone">
      <b class="header">clone</b><code>model.clone()</code>
      <br>
      Returns a new instance of the model with identical attributes.
    </p>

    <p id="Model-isNew">
      <b class="header">isNew</b><code>model.isNew()</code>
      <br>
      Has this model been saved to the server yet? If the model does not yet have
      an <tt>id</tt>, it is considered to be new.
    </p>

    <p id="Model-hasChanged">
      <b class="header">hasChanged</b><code>model.hasChanged([attribute])</code>
      <br>
      Has the model changed since its last <a href="http://backbonejs.org/#Model-set">set</a>? If an <b>attribute</b>
      is passed, returns <tt>true</tt> if that specific attribute has changed.
    </p>

    <p class="warning">
      Note that this method, and the following change-related ones,
      are only useful during the course of a <tt>"change"</tt> event.
    </p>

<pre>book.on("change", function() {
  if (book.hasChanged("title")) {
    ...
  }
});
</pre>

    <p id="Model-changedAttributes">
      <b class="header">changedAttributes</b><code>model.changedAttributes([attributes])</code>
      <br>
      Retrieve a hash of only the model's attributes that have changed since the last
      <a href="http://backbonejs.org/#Model-set">set</a>, or <tt>false</tt> if there are none. Optionally, an external
      <b>attributes</b> hash can be passed in, returning the attributes in that
      hash which differ from the model. This can be used to figure out which
      portions of a view should be updated, or what calls
      need to be made to sync the changes to the server.
    </p>

    <p id="Model-previous">
      <b class="header">previous</b><code>model.previous(attribute)</code>
      <br>
      During a <tt>"change"</tt> event, this method can be used to get the
      previous value of a changed attribute.
    </p>

<div class="run" title="Run"></div><pre class="runnable">var bill = new Backbone.Model({
  name: "Bill Smith"
});

bill.on("change:name", function(model, name) {
  alert("Changed name from " + bill.previous("name") + " to " + name);
});

bill.set({name : "Bill Jones"});
</pre>

    <p id="Model-previousAttributes">
      <b class="header">previousAttributes</b><code>model.previousAttributes()</code>
      <br>
      Return a copy of the model's previous attributes. Useful for getting a
      diff between versions of a model, or getting back to a valid state after
      an error occurs.
    </p>

    <h2 id="Collection">Backbone.Collection</h2>

    <p>
      Collections are ordered sets of models. You can bind <tt>"change"</tt> events
      to be notified when any model in the collection has been modified,
      listen for <tt>"add"</tt> and <tt>"remove"</tt> events, <tt>fetch</tt>
      the collection from the server, and use a full suite of
      <a href="http://backbonejs.org/#Collection-Underscore-Methods">Underscore.js methods</a>.
    </p>

    <p>
      Any event that is triggered on a model in a collection will also be
      triggered on the collection directly, for convenience.
      This allows you to listen for changes to specific attributes in any
      model in a collection, for example:
      <tt>documents.on("change:selected", ...)</tt>
    </p>

    <p id="Collection-extend">
      <b class="header">extend</b><code>Backbone.Collection.extend(properties, [classProperties])</code>
      <br>
      To create a <b>Collection</b> class of your own, extend <b>Backbone.Collection</b>,
      providing instance <b>properties</b>, as well as optional <b>classProperties</b> to be attached
      directly to the collection's constructor function.
    </p>

    <p id="Collection-model">
      <b class="header">model</b><code>collection.model([attrs], [options])</code>
      <br>
      Override this property to specify the model class that the collection
      contains. If defined, you can pass raw attributes objects (and arrays) to
      <a href="http://backbonejs.org/#Collection-add">add</a>, <a href="http://backbonejs.org/#Collection-create">create</a>,
      and <a href="http://backbonejs.org/#Collection-reset">reset</a>, and the attributes will be
      converted into a model of the proper type.
    </p>

<pre>var Library = Backbone.Collection.extend({
  model: Book
});
</pre>

    <p>
      A collection can also contain polymorphic models by overriding this property
      with a constructor that returns a model.
    </p>

<pre>var Library = Backbone.Collection.extend({

  model: function(attrs, options) {
    if (condition) {
      return new PublicDocument(attrs, options);
    } else {
      return new PrivateDocument(attrs, options);
    }
  }

});
</pre>

    <p id="Collection-modelId">
      <b class="header">modelId</b><code>collection.modelId(attrs)</code>
      <br>
      Override this method to return the value the collection will use to
      identify a model given its attributes. Useful for combining models from
      multiple tables with different <a href="http://backbonejs.org/#Model-idAttribute"><tt>idAttribute</tt></a>
      values into a single collection.
    </p>

    <p>
      By default returns the value of the attributes'
      <a href="http://backbonejs.org/#Model-idAttribute"><tt>idAttribute</tt></a>
      from the collection's model class or failing that, <tt>id</tt>. If
      your collection uses a <a href="http://backbonejs.org/#Collection-model">model factory</a> and
      those models have an <tt>idAttribute</tt> other than <tt>id</tt> you must
      override this method.
    </p>

<div class="run" title="Run"></div><pre class="runnable">var Library = Backbone.Collection.extend({
  modelId: function(attrs) {
    return attrs.type + attrs.id;
  }
});

var library = new Library([
  {type: 'dvd', id: 1},
  {type: 'vhs', id: 1}
]);

var dvdId = library.get('dvd1').id;
var vhsId = library.get('vhs1').id;
alert('dvd: ' + dvdId + ', vhs: ' + vhsId);
</pre>

    <p id="Collection-constructor">
      <b class="header">constructor / initialize</b><code>new Backbone.Collection([models], [options])</code>
      <br>
      When creating a Collection, you may choose to pass in the initial array
      of <b>models</b>.  The collection's <a href="http://backbonejs.org/#Collection-comparator">comparator</a>
      may be included as an option. Passing <tt>false</tt> as the
      comparator option will prevent sorting. If you define an
      <b>initialize</b> function, it will be invoked when the collection is
      created. There are a couple of options that, if provided, are attached to
      the collection directly: <tt>model</tt> and <tt>comparator</tt>.<br>
      Pass <tt>null</tt> for <tt>models</tt> to create an empty Collection with <tt>options</tt>.
    </p>

<pre>var tabs = new TabSet([tab1, tab2, tab3]);
var spaces = new Backbone.Collection(null, {
  model: Space
});
</pre>

    <p id="Collection-models">
      <b class="header">models</b><code>collection.models</code>
      <br>
      Raw access to the JavaScript array of models inside of the collection. Usually you'll
      want to use <tt>get</tt>, <tt>at</tt>, or the <b>Underscore methods</b>
      to access model objects, but occasionally a direct reference to the array
      is desired.
    </p>

    <p id="Collection-toJSON">
      <b class="header">toJSON</b><code>collection.toJSON([options])</code>
      <br>
      Return an array containing the attributes hash of each model
      (via <a href="http://backbonejs.org/#Model-toJSON">toJSON</a>) in the
      collection. This can be used to serialize and persist the
      collection as a whole. The name of this method is a bit confusing, because
      it conforms to
      <a href="https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#toJSON_behavior">JavaScript's JSON API</a>.
    </p>

<div class="run" title="Run"></div><pre class="runnable">var collection = new Backbone.Collection([
  {name: "Tim", age: 5},
  {name: "Ida", age: 26},
  {name: "Rob", age: 55}
]);

alert(JSON.stringify(collection));
</pre>

    <p id="Collection-sync">
      <b class="header">sync</b><code>collection.sync(method, collection, [options])</code>
      <br>
      Uses <a href="http://backbonejs.org/#Sync">Backbone.sync</a> to persist the state of a
      collection to the server.  Can be overridden for custom behavior.
    </p>

    <p id="Collection-Underscore-Methods">
      <b class="header">Underscore Methods (46)</b>
      <br>
      Backbone proxies to <b>Underscore.js</b> to provide 46 iteration functions
      on <b>Backbone.Collection</b>. They aren't all documented here, but
      you can take a look at the Underscore documentation for the full details…
    </p>

    <p>
      Most methods can take an object or string to support model-attribute-style
      predicates or a function that receives the model instance as an argument.
    </p>

    <ul class="small">
      <li><a href="http://underscorejs.org/#each">forEach (each)</a></li>
      <li><a href="http://underscorejs.org/#map">map (collect)</a></li>
      <li><a href="http://underscorejs.org/#reduce">reduce (foldl, inject)</a></li>
      <li><a href="http://underscorejs.org/#reduceRight">reduceRight (foldr)</a></li>
      <li><a href="http://underscorejs.org/#find">find (detect)</a></li>
      <li><a href="http://underscorejs.org/#findIndex">findIndex</a></li>
      <li><a href="http://underscorejs.org/#findLastIndex">findLastIndex</a></li>
      <li><a href="http://underscorejs.org/#filter">filter (select)</a></li>
      <li><a href="http://underscorejs.org/#reject">reject</a></li>
      <li><a href="http://underscorejs.org/#every">every (all)</a></li>
      <li><a href="http://underscorejs.org/#some">some (any)</a></li>
      <li><a href="http://underscorejs.org/#contains">contains (includes)</a></li>
      <li><a href="http://underscorejs.org/#invoke">invoke</a></li>
      <li><a href="http://underscorejs.org/#max">max</a></li>
      <li><a href="http://underscorejs.org/#min">min</a></li>
      <li><a href="http://underscorejs.org/#sortBy">sortBy</a></li>
      <li><a href="http://underscorejs.org/#groupBy">groupBy</a></li>
      <li><a href="http://underscorejs.org/#shuffle">shuffle</a></li>
      <li><a href="http://underscorejs.org/#toArray">toArray</a></li>
      <li><a href="http://underscorejs.org/#size">size</a></li>
      <li><a href="http://underscorejs.org/#first">first (head, take)</a></li>
      <li><a href="http://underscorejs.org/#initial">initial</a></li>
      <li><a href="http://underscorejs.org/#rest">rest (tail, drop)</a></li>
      <li><a href="http://underscorejs.org/#last">last</a></li>
      <li><a href="http://underscorejs.org/#without">without</a></li>
      <li><a href="http://underscorejs.org/#indexOf">indexOf</a></li>
      <li><a href="http://underscorejs.org/#lastIndexOf">lastIndexOf</a></li>
      <li><a href="http://underscorejs.org/#isEmpty">isEmpty</a></li>
      <li><a href="http://underscorejs.org/#chain">chain</a></li>
      <li><a href="http://underscorejs.org/#difference">difference</a></li>
      <li><a href="http://underscorejs.org/#sample">sample</a></li>
      <li><a href="http://underscorejs.org/#partition">partition</a></li>
      <li><a href="http://underscorejs.org/#countBy">countBy</a></li>
      <li><a href="http://underscorejs.org/#indexBy">indexBy</a></li>
    </ul>

<pre>books.each(function(book) {
  book.publish();
});

var titles = books.map("title");

var publishedBooks = books.filter({published: true});

var alphabetical = books.sortBy(function(book) {
  return book.author.get("name").toLowerCase();
});

var randomThree = books.sample(3);
</pre>

    <p id="Collection-add">
      <b class="header">add</b><code>collection.add(models, [options])</code>
      <br>
      Add a model (or an array of models) to the collection, firing an <tt>"add"</tt>
      event for each model, and an <tt>"update"</tt> event afterwards. If a <a href="http://backbonejs.org/#Collection-model">model</a> property is defined, you may also pass
      raw attributes objects, and have them be vivified as instances of the model.
      Returns the added (or preexisting, if duplicate) models.
      Pass <tt>{at: index}</tt> to splice the model into the collection at the
      specified <tt>index</tt>. If you're adding models to the collection that are
      <i>already</i> in the collection, they'll be ignored, unless you pass
      <tt>{merge: true}</tt>, in which case their attributes will be merged
      into the corresponding models, firing any appropriate <tt>"change"</tt> events.
    </p>

<div class="run" title="Run"></div><pre class="runnable">var ships = new Backbone.Collection;

ships.on("add", function(ship) {
  alert("Ahoy " + ship.get("name") + "!");
});

ships.add([
  {name: "Flying Dutchman"},
  {name: "Black Pearl"}
]);
</pre>

    <p class="warning">
      Note that adding the same model (a model with the same <tt>id</tt>) to
      a collection more than once <br> is a no-op.
    </p>

    <p id="Collection-remove">
      <b class="header">remove</b><code>collection.remove(models, [options])</code>
      <br>
      Remove a model (or an array of models) from the collection, and return
      them. Each model can be a Model instance, an <tt>id</tt> string or a JS
      object, any value acceptable as the <tt>id</tt> argument of
      <a href="http://backbonejs.org/#Collection-get"><tt>collection.get</tt></a>.
      Fires a <tt>"remove"</tt> event for each model, and a single
      <tt>"update"</tt> event afterwards, unless <tt>{silent: true}</tt> is passed.
      The model's index before removal is available to listeners as
      <tt>options.index</tt>.
    </p>

    <p id="Collection-reset">
      <b class="header">reset</b><code>collection.reset([models], [options])</code>
      <br>
      Adding and removing models one at a time is all well and good, but sometimes
      you have so many models to change that you'd rather just update the collection
      in bulk. Use <b>reset</b> to replace a collection with a new list
      of models (or attribute hashes), triggering a single <tt>"reset"</tt> event
      on completion, and <i>without</i> triggering any add or remove events on any models.
      Returns the newly-set models.
      For convenience, within a <tt>"reset"</tt> event, the list of any
      previous models is available as <tt>options.previousModels</tt>.<br>
      Pass <tt>null</tt> for <tt>models</tt> to empty your Collection with <tt>options</tt>.
    </p>

    <p>
      Here's an example using <b>reset</b> to bootstrap a collection during initial page load,
      in a Rails application:
    </p>

<pre>&lt;script&gt;
  var accounts = new Backbone.Collection;
  accounts.reset(&lt;%= @accounts.to_json %&gt;);
&lt;/script&gt;
</pre>

    <p>
      Calling <tt>collection.reset()</tt> without passing any models as arguments
      will empty the entire collection.
    </p>

    <p id="Collection-set">
      <b class="header">set</b><code>collection.set(models, [options])</code>
      <br>
      The <b>set</b> method performs a "smart" update of the collection
      with the passed list of models. If a model in the list isn't yet in the
      collection it will be added; if the model is already in the collection
      its attributes will be merged; and if the collection contains any models that
      <i>aren't</i> present in the list, they'll be removed. All of the appropriate
      <tt>"add"</tt>, <tt>"remove"</tt>, and <tt>"change"</tt> events are fired
      as this happens. Returns the touched models in the collection.
      If you'd like to customize the behavior, you can disable
      it with options: <tt>{add: false}</tt>, <tt>{remove: false}</tt>, or <tt>{merge: false}</tt>.
    </p>

<pre>var vanHalen = new Backbone.Collection([eddie, alex, stone, roth]);

vanHalen.set([eddie, alex, stone, hagar]);

// Fires a "remove" event for roth, and an "add" event for "hagar".
// Updates any of stone, alex, and eddie's attributes that may have
// changed over the years.
</pre>

    <p id="Collection-get">
      <b class="header">get</b><code>collection.get(id)</code>
      <br>
      Get a model from a collection, specified by an <a href="http://backbonejs.org/#Model-id">id</a>,
      a <a href="http://backbonejs.org/#Model-cid">cid</a>, or by passing in a <b>model</b>.
    </p>

<pre>var book = library.get(110);
</pre>

    <p id="Collection-at">
      <b class="header">at</b><code>collection.at(index)</code>
      <br>
      Get a model from a collection, specified by index. Useful if your collection
      is sorted, and if your collection isn't sorted, <b>at</b> will still
      retrieve models in insertion order. When passed a negative index, it
      will retrieve the model from the back of the collection.
    </p>

    <p id="Collection-push">
      <b class="header">push</b><code>collection.push(model, [options])</code>
      <br>
      Add a model at the end of a collection. Takes the same options as
      <a href="http://backbonejs.org/#Collection-add">add</a>.
    </p>

    <p id="Collection-pop">
      <b class="header">pop</b><code>collection.pop([options])</code>
      <br>
      Remove and return the last model from a collection. Takes the same options as
      <a href="http://backbonejs.org/#Collection-remove">remove</a>.
    </p>

    <p id="Collection-unshift">
      <b class="header">unshift</b><code>collection.unshift(model, [options])</code>
      <br>
      Add a model at the beginning of a collection. Takes the same options as
      <a href="http://backbonejs.org/#Collection-add">add</a>.
    </p>

    <p id="Collection-shift">
      <b class="header">shift</b><code>collection.shift([options])</code>
      <br>
      Remove and return the first model from a collection. Takes the same options as
      <a href="http://backbonejs.org/#Collection-remove">remove</a>.
    </p>

    <p id="Collection-slice">
      <b class="header">slice</b><code>collection.slice(begin, end)</code>
      <br>
      Return a shallow copy of this collection's models, using the same options as
      native
      <a href="https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/slice">Array#slice</a>.
    </p>

    <p id="Collection-length">
      <b class="header">length</b><code>collection.length</code>
      <br>
      Like an array, a Collection maintains a <tt>length</tt> property, counting
      the number of models it contains.
    </p>

    <p id="Collection-comparator">
      <b class="header">comparator</b><code>collection.comparator</code>
      <br>
      By default there is no <b>comparator</b> for a collection.
      If you define a comparator, it will be used to maintain
      the collection in sorted order. This means that as models are added,
      they are inserted at the correct index in <tt>collection.models</tt>.
      A comparator can be defined as a
      <a href="http://underscorejs.org/#sortBy">sortBy</a>
      (pass a function that takes a single argument),
      as a
      <a href="https://developer.mozilla.org/JavaScript/Reference/Global_Objects/Array/sort">sort</a>
      (pass a comparator function that expects two arguments),
      or as a string indicating the attribute to sort by.
    </p>

    <p>
      "sortBy" comparator functions take a model and return a numeric or string
      value by which the model should be ordered relative to others.
      "sort" comparator functions take two models, and return <tt>-1</tt> if
      the first model should come before the second, <tt>0</tt> if they are of
      the same rank and <tt>1</tt> if the first model should come after.
      <i>Note that Backbone depends on the arity of your comparator function to
      determine between the two styles, so be careful if your comparator function
      is bound.</i>
    </p>

    <p>
      Note how even though all of the chapters in this example are added backwards,
      they come out in the proper order:
    </p>

<div class="run" title="Run"></div><pre class="runnable">var Chapter  = Backbone.Model;
var chapters = new Backbone.Collection;

chapters.comparator = 'page';

chapters.add(new Chapter({page: 9, title: "The End"}));
chapters.add(new Chapter({page: 5, title: "The Middle"}));
chapters.add(new Chapter({page: 1, title: "The Beginning"}));

alert(chapters.pluck('title'));
</pre>

    <p class="warning">
      Collections with a comparator will not automatically re-sort if you
      later change model attributes, so you may wish to call
      <tt>sort</tt> after changing model attributes that would affect the order.
    </p>

    <p id="Collection-sort">
      <b class="header">sort</b><code>collection.sort([options])</code>
      <br>
      Force a collection to re-sort itself. You don't need to call this under
      normal circumstances, as a collection with a <a href="http://backbonejs.org/#Collection-comparator">comparator</a>
      will sort itself whenever a model is added. To disable sorting when adding
      a model, pass <tt>{sort: false}</tt> to <tt>add</tt>. Calling <b>sort</b>
      triggers a <tt>"sort"</tt> event on the collection.
    </p>

    <p id="Collection-pluck">
      <b class="header">pluck</b><code>collection.pluck(attribute)</code>
      <br>
      Pluck an attribute from each model in the collection. Equivalent to calling
      <tt>map</tt> and returning a single attribute from the iterator.
    </p>

<div class="run" title="Run"></div><pre class="runnable">var stooges = new Backbone.Collection([
  {name: "Curly"},
  {name: "Larry"},
  {name: "Moe"}
]);

var names = stooges.pluck("name");

alert(JSON.stringify(names));
</pre>

    <p id="Collection-where">
      <b class="header">where</b><code>collection.where(attributes)</code>
      <br>
      Return an array of all the models in a collection that match the
      passed <b>attributes</b>. Useful for simple cases of <tt>filter</tt>.
    </p>

<div class="run" title="Run"></div><pre class="runnable">var friends = new Backbone.Collection([
  {name: "Athos",      job: "Musketeer"},
  {name: "Porthos",    job: "Musketeer"},
  {name: "Aramis",     job: "Musketeer"},
  {name: "d'Artagnan", job: "Guard"},
]);

var musketeers = friends.where({job: "Musketeer"});

alert(musketeers.length);
</pre>

    <p id="Collection-findWhere">
      <b class="header">findWhere</b><code>collection.findWhere(attributes)</code>
      <br>
      Just like <a href="http://backbonejs.org/#Collection-where">where</a>, but directly returns only
      the first model in the collection that matches the passed <b>attributes</b>.
    </p>

    <p id="Collection-url">
      <b class="header">url</b><code>collection.url or collection.url()</code>
      <br>
      Set the <b>url</b> property (or function) on a collection to reference
      its location on the server. Models within the collection will use <b>url</b>
      to construct URLs of their own.
    </p>

<pre>var Notes = Backbone.Collection.extend({
  url: '/notes'
});

// Or, something more sophisticated:

var Notes = Backbone.Collection.extend({
  url: function() {
    return this.document.url() + '/notes';
  }
});
</pre>

    <p id="Collection-parse">
      <b class="header">parse</b><code>collection.parse(response, options)</code>
      <br>
      <b>parse</b> is called by Backbone whenever a collection's models are
      returned by the server, in <a href="http://backbonejs.org/#Collection-fetch">fetch</a>.
      The function is passed the raw <tt>response</tt> object, and should return
      the array of model attributes to be <a href="http://backbonejs.org/#Collection-add">added</a>
      to the collection. The default implementation is a no-op, simply passing
      through the JSON response. Override this if you need to work with a
      preexisting API, or better namespace your responses.
    </p>

<pre>var Tweets = Backbone.Collection.extend({
  // The Twitter Search API returns tweets under "results".
  parse: function(response) {
    return response.results;
  }
});
</pre>

    <p id="Collection-clone">
      <b class="header">clone</b><code>collection.clone()</code>
      <br>
      Returns a new instance of the collection with an identical list of models.
    </p>

    <p id="Collection-fetch">
      <b class="header">fetch</b><code>collection.fetch([options])</code>
      <br>
      Fetch the default set of models for this collection from the server,
      <a href="http://backbonejs.org/#Collection-set">setting</a> them on the collection when they arrive.
      The <b>options</b> hash takes <tt>success</tt> and <tt>error</tt> callbacks
      which will both be passed <tt>(collection, response, options)</tt> as arguments.
      When the model data returns from the server, it uses <a href="http://backbonejs.org/#Collection-set">set</a>
      to (intelligently) merge the fetched models, unless you pass <tt>{reset: true}</tt>,
      in which case the collection will be (efficiently) <a href="http://backbonejs.org/#Collection-reset">reset</a>.
      Delegates to <a href="http://backbonejs.org/#Sync">Backbone.sync</a>
      under the covers for custom persistence strategies and returns a
      <a href="http://api.jquery.com/jQuery.ajax/#jqXHR">jqXHR</a>.
      The server handler for <b>fetch</b> requests should return a JSON array of
      models.
    </p>

<div class="run" title="Run"></div><pre class="runnable">Backbone.sync = function(method, model) {
  alert(method + ": " + model.url);
};

var accounts = new Backbone.Collection;
accounts.url = '/accounts';

accounts.fetch();
</pre>

    <p>
      The behavior of <b>fetch</b> can be customized by using the available
      <a href="http://backbonejs.org/#Collection-set">set</a> options. For example, to fetch a
      collection, getting an <tt>"add"</tt> event for every new model, and
      a <tt>"change"</tt> event for every changed existing model, without
      removing anything: <tt>collection.fetch({remove: false})</tt>
    </p>

    <p>
      <b>jQuery.ajax</b> options can also be passed directly as <b>fetch</b> options,
      so to fetch a specific page of a paginated collection:
      <tt>Documents.fetch({data: {page: 3}})</tt>
    </p>

    <p>
      Note that <b>fetch</b> should not be used to populate collections on
      page load — all models needed at load time should already be
      <a href="http://backbonejs.org/#FAQ-bootstrap">bootstrapped</a> in to place. <b>fetch</b> is
      intended for lazily-loading models for interfaces that are not needed
      immediately: for example, documents with collections of notes that may be
      toggled open and closed.
    </p>

    <p id="Collection-create">
      <b class="header">create</b><code>collection.create(attributes, [options])</code>
      <br>
      Convenience to create a new instance of a model within a collection.
      Equivalent to instantiating a model with a hash of attributes,
      saving the model to the server, and adding the model to the set after being
      successfully created. Returns the new model. If client-side validation
      failed, the model will be unsaved, with validation errors.
      In order for this to work, you should set the
      <a href="http://backbonejs.org/#Collection-model">model</a> property of the collection.
      The <b>create</b> method can accept either an attributes hash or an
      existing, unsaved model object.
    </p>

    <p>
      Creating a model will cause an immediate <tt>"add"</tt> event to be
      triggered on the collection, a <tt>"request"</tt> event as the new model is
      sent to the server, as well as a <tt>"sync"</tt> event, once the
      server has responded with the successful creation of the model. Pass <tt>{wait: true}</tt>
      if you'd like to wait for the server before adding the new model to the collection.
    </p>

<pre>var Library = Backbone.Collection.extend({
  model: Book
});

var nypl = new Library;

var othello = nypl.create({
  title: "Othello",
  author: "William Shakespeare"
});
</pre>

    <h2 id="Router">Backbone.Router</h2>

    <p>
      Web applications often provide linkable, bookmarkable, shareable URLs for
      important locations in the app. Until recently, hash fragments
      (<tt>#page</tt>) were used to provide these permalinks, but with the
      arrival of the History API, it's now possible to use standard URLs (<tt>/page</tt>).
      <b>Backbone.Router</b> provides methods for routing client-side pages, and
      connecting them to actions and events. For browsers which don't yet support
      the History API, the Router handles graceful fallback and transparent
      translation to the fragment version of the URL.
    </p>

    <p>
      During page load, after your application has finished creating all of its routers,
      be sure to call <tt>Backbone.history.start()</tt> or
      <tt>Backbone.history.start({pushState: true})</tt> to route the initial URL.
    </p>

    <p id="Router-extend">
      <b class="header">extend</b><code>Backbone.Router.extend(properties, [classProperties])</code>
      <br>
      Get started by creating a custom router class. Define action functions that are
      triggered when certain URL fragments are
      matched, and provide a <a href="http://backbonejs.org/#Router-routes">routes</a> hash
      that pairs routes to actions. Note that you'll want to avoid using a
      leading slash in your route definitions:
    </p>

<pre>var Workspace = Backbone.Router.extend({

  routes: {
    "help":                 "help",    // #help
    "search/:query":        "search",  // #search/kiwis
    "search/:query/p:page": "search"   // #search/kiwis/p7
  },

  help: function() {
    ...
  },

  search: function(query, page) {
    ...
  }

});
</pre>

    <p id="Router-routes">
      <b class="header">routes</b><code>router.routes</code>
      <br>
      The routes hash maps URLs with parameters to functions on your router
      (or just direct function definitions, if you prefer),
      similar to the <a href="http://backbonejs.org/#View">View</a>'s <a href="http://backbonejs.org/#View-delegateEvents">events hash</a>.
      Routes can contain parameter parts, <tt>:param</tt>, which match a single URL
      component between slashes; and splat parts <tt>*splat</tt>, which can match
      any number of URL components. Part of a route can be made optional by
      surrounding it in parentheses <tt>(/:optional)</tt>.
    </p>

    <p>
      For example, a route of <tt>"search/:query/p:page"</tt> will match
      a fragment of <tt>#search/obama/p2</tt>, passing <tt>"obama"</tt>
      and <tt>"2"</tt> to the action as positional arguments.
    </p>

    <p>
      A route of <tt>"file/*path"</tt> will match
      <tt>#file/folder/file.txt</tt>, passing
      <tt>"folder/file.txt"</tt> to the action.
    </p>

    <p>
      A route of <tt>"docs/:section(/:subsection)"</tt> will match
      <tt>#docs/faq</tt> and <tt>#docs/faq/installing</tt>, passing
      <tt>"faq"</tt> to the action in the first case, and passing <tt>"faq"</tt>
      and <tt>"installing"</tt> to the action in the second.
    </p>

    <p>
      A nested optional route of <tt>"docs(/:section)(/:subsection)"</tt> will match
      <tt>#docs</tt>, <tt>#docs/faq</tt>, and <tt>#docs/faq/installing</tt>,
      passing <tt>"faq"</tt> to the action in the second case, and passing <tt>"faq"</tt>
      and <tt>"installing"</tt> to the action in the third.
    </p>

    <p>
      Trailing slashes are treated as part of the URL, and (correctly) treated
      as a unique route when accessed. <tt>docs</tt> and <tt>docs/</tt> will fire
      different callbacks. If you can't avoid generating both types of URLs, you
      can define a <tt>"docs(/)"</tt> matcher to capture both cases.
    </p>

    <p>
      When the visitor presses the back button, or enters a URL, and a particular
      route is matched, the name of the action will be fired as an
      <a href="http://backbonejs.org/#Events">event</a>, so that other objects can listen to the router,
      and be notified. In the following example, visiting <tt>#help/uploading</tt>
      will fire a <tt>route:help</tt> event from the router.
    </p>

<pre>routes: {
  "help/:page":         "help",
  "download/*path":     "download",
  "folder/:name":       "openFolder",
  "folder/:name-:mode": "openFolder"
}
</pre>

<pre>router.on("route:help", function(page) {
  ...
});
</pre>

    <p id="Router-constructor">
      <b class="header">constructor / initialize</b><code>new Router([options])</code>
      <br>
      When creating a new router, you may pass its
      <a href="http://backbonejs.org/#Router-routes">routes</a> hash directly as an option, if you
      choose. All <tt>options</tt> will also be passed to your <tt>initialize</tt>
      function, if defined.
    </p>

    <p id="Router-route">
      <b class="header">route</b><code>router.route(route, name, [callback])</code>
      <br>
      Manually create a route for the router, The <tt>route</tt> argument may
      be a <a href="http://backbonejs.org/#Router-routes">routing string</a> or regular expression.
      Each matching capture from the route or regular expression will be passed as
      an argument to the callback. The <tt>name</tt> argument will be triggered as
      a <tt>"route:name"</tt> event whenever the route is matched.  If the
      <tt>callback</tt> argument is omitted <tt>router[name]</tt> will be used
      instead. Routes added later may override previously declared routes.
    </p>

<pre>initialize: function(options) {

  // Matches #page/10, passing "10"
  this.route("page/:number", "page", function(number){ ... });

  // Matches /117-a/b/c/open, passing "117-a/b/c" to this.open
  this.route(/^(.*?)\/open$/, "open");

},

open: function(id) { ... }
</pre>

    <p id="Router-navigate">
      <b class="header">navigate</b><code>router.navigate(fragment, [options])</code>
      <br>
      Whenever you reach a point in your application that you'd like to save
      as a URL, call <b>navigate</b> in order to update the URL.
      If you also wish to call the route function, set the <b>trigger</b>
      option to <tt>true</tt>.
      To update the URL without creating an entry in the browser's history,
      set the <b>replace</b> option to <tt>true</tt>.
    </p>

<pre>openPage: function(pageNumber) {
  this.document.pages.at(pageNumber).open();
  this.navigate("page/" + pageNumber);
}

# Or ...

app.navigate("help/troubleshooting", {trigger: true});

# Or ...

app.navigate("help/troubleshooting", {trigger: true, replace: true});
</pre>

    <p id="Router-execute">
      <b class="header">execute</b><code>router.execute(callback, args, name)</code>
      <br>
      This method is called internally within the router, whenever a route
      matches and its corresponding <b>callback</b> is about to be executed.
      Return <b>false</b> from execute to cancel the current transition.
      Override it to perform custom parsing or wrapping of your routes, for
      example, to parse query strings before handing them to your route
      callback, like so:
    </p>

<pre>var Router = Backbone.Router.extend({
  execute: function(callback, args, name) {
    if (!loggedIn) {
      goToLogin();
      return false;
    }
    args.push(parseQueryString(args.pop()));
    if (callback) callback.apply(this, args);
  }
});
</pre>

    <h2 id="History">Backbone.history</h2>

    <p>
      <b>History</b> serves as a global router (per frame) to handle <tt>hashchange</tt>
      events or <tt>pushState</tt>, match the appropriate route, and trigger callbacks.
      You shouldn't ever have to create one of these yourself since <tt>Backbone.history</tt>
      already contains one.
    </p>

    <p>
      <b>pushState</b> support exists on a purely opt-in basis in Backbone.
      Older browsers that don't support <tt>pushState</tt> will continue to use
      hash-based URL fragments, and if a hash URL is visited by a
      <tt>pushState</tt>-capable browser, it will be transparently upgraded to
      the true URL. Note that using real URLs requires your web server to be
      able to correctly render those pages, so back-end changes are required
      as well. For example, if you have a route of <tt>/documents/100</tt>,
      your web server must be able to serve that page, if the browser
      visits that URL directly. For full search-engine crawlability, it's best to
      have the server generate the complete HTML for the page ... but if it's a web
      application, just rendering the same content you would have for the root URL,
      and filling in the rest with Backbone Views and JavaScript works fine.
    </p>

    <p id="History-start">
      <b class="header">start</b><code>Backbone.history.start([options])</code>
      <br>
      When all of your <a href="http://backbonejs.org/#Router">Routers</a> have been created,
      and all of the routes are set up properly, call <tt>Backbone.history.start()</tt>
      to begin monitoring <tt>hashchange</tt> events, and dispatching routes.
      Subsequent calls to <tt>Backbone.history.start()</tt> will throw an error,
      and <tt>Backbone.History.started</tt> is a boolean value indicating whether
      it has already been called.
    </p>

    <p>
      To indicate that you'd like to use HTML5 <tt>pushState</tt> support in
      your application, use <tt>Backbone.history.start({pushState: true})</tt>.
      If you'd like to use <tt>pushState</tt>, but have browsers that don't support
      it natively use full page refreshes instead, you can add
      <tt>{hashChange: false}</tt> to the options.
    </p>

    <p>
      If your application is not being served from the root url <tt>/</tt> of your
      domain, be sure to tell History where the root really is, as an option:
      <tt>Backbone.history.start({pushState: true, root: "/public/search/"})</tt>
    </p>

    <p>
      When called, if a route succeeds with a match for the current URL,
      <tt>Backbone.history.start()</tt> returns <tt>true</tt>. If no defined
      route matches the current URL, it returns <tt>false</tt>.
    </p>

    <p>
      If the server has already rendered the entire page, and you don't want the
      initial route to trigger when starting History, pass <tt>silent: true</tt>.
    </p>

    <p>
      Because hash-based history in Internet Explorer relies on an
      <tt>&lt;iframe&gt;</tt>, be sure to call <tt>start()</tt> only after the DOM
      is ready.
    </p>

<pre>$(function(){
  new WorkspaceRouter();
  new HelpPaneRouter();
  Backbone.history.start({pushState: true});
});
</pre>

    <h2 id="Sync">Backbone.sync</h2>

    <p>
      <b>Backbone.sync</b> is the function that Backbone calls every time it
      attempts to read or save a model to the server. By default, it uses
      <tt>jQuery.ajax</tt> to make a RESTful JSON request and returns a
      <a href="http://api.jquery.com/jQuery.ajax/#jqXHR">jqXHR</a>. You can override
      it in order to use a different persistence strategy, such as WebSockets,
      XML transport, or Local Storage.
    </p>

    <p>
      The method signature of <b>Backbone.sync</b> is <tt>sync(method, model, [options])</tt>
    </p>

    <ul>
      <li><b>method</b> – the CRUD method (<tt>"create"</tt>, <tt>"read"</tt>, <tt>"update"</tt>, or <tt>"delete"</tt>)</li>
      <li><b>model</b> – the model to be saved (or collection to be read)</li>
      <li><b>options</b> – success and error callbacks, and all other jQuery request options</li>
    </ul>

    <p>
      With the default implementation, when <b>Backbone.sync</b> sends up a request to save
      a model, its attributes will be passed, serialized as JSON, and sent in the HTTP body
      with content-type <tt>application/json</tt>. When returning a JSON response,
      send down the attributes of the  model that have been changed by the server, and need
      to be updated on the client. When responding to a <tt>"read"</tt> request from a collection
      (<a href="http://backbonejs.org/#Collection-fetch">Collection#fetch</a>), send down an array
      of model attribute objects.
    </p>

    <p>
      Whenever a model or collection begins a <b>sync</b> with the server, a
      <tt>"request"</tt> event is emitted. If the request completes successfully
      you'll get a <tt>"sync"</tt> event, and an <tt>"error"</tt> event if not.
    </p>

    <p>
      The <b>sync</b> function may be overridden globally as <tt>Backbone.sync</tt>,
      or at a finer-grained level, by adding a <tt>sync</tt> function to a Backbone
      collection or to an individual model.
    </p>

    <p>
      The default <b>sync</b> handler maps CRUD to REST like so:
    </p>

    <ul>
      <li><b>create → POST &nbsp; </b><tt>/collection</tt></li>
      <li><b>read → GET &nbsp; </b><tt>/collection[/id]</tt></li>
      <li><b>update → PUT &nbsp; </b><tt>/collection/id</tt></li>
      <li><b>patch → PATCH &nbsp; </b><tt>/collection/id</tt></li>
      <li><b>delete → DELETE &nbsp; </b><tt>/collection/id</tt></li>
    </ul>

    <p>
      As an example, a Rails 4 handler responding to an <tt>"update"</tt> call from
      <tt>Backbone</tt> might look like this:
    </p>

<pre>def update
  account = Account.find params[:id]
  permitted = params.require(:account).permit(:name, :otherparam)
  account.update_attributes permitted
  render :json =&gt; account
end
</pre>

    <p>
      One more tip for integrating Rails versions prior to 3.1 is to disable
      the default namespacing for <tt>to_json</tt> calls on models by setting
      <tt>ActiveRecord::Base.include_root_in_json = false</tt>
    </p>

    <p id="Sync-ajax">
      <b class="header">ajax</b><code>Backbone.ajax = function(request) { ... };</code>
      <br>
      If you want to use a custom AJAX function, or your endpoint doesn't support
      the <a href="http://api.jquery.com/jQuery.ajax/">jQuery.ajax</a> API
      and you need to tweak things, you can do so by setting <tt>Backbone.ajax</tt>.
    </p>

    <p id="Sync-emulateHTTP">
      <b class="header">emulateHTTP</b><code>Backbone.emulateHTTP = true</code>
      <br>
      If you want to work with a legacy web server that doesn't support Backbone's
      default REST/HTTP approach, you may choose to turn on <tt>Backbone.emulateHTTP</tt>.
      Setting this option will fake <tt>PUT</tt>, <tt>PATCH</tt> and <tt>DELETE</tt> requests with
      a HTTP <tt>POST</tt>, setting the <tt>X-HTTP-Method-Override</tt> header
      with the true method. If <tt>emulateJSON</tt> is also on, the true method
      will be passed as an additional <tt>_method</tt> parameter.
    </p>

<pre>Backbone.emulateHTTP = true;

model.save();  // POST to "/collection/id", with "_method=PUT" + header.
</pre>

    <p id="Sync-emulateJSON">
      <b class="header">emulateJSON</b><code>Backbone.emulateJSON = true</code>
      <br>
      If you're working with a legacy web server that can't handle requests
      encoded as <tt>application/json</tt>, setting <tt>Backbone.emulateJSON = true;</tt>
      will cause the JSON to be serialized under a <tt>model</tt> parameter, and
      the request to be made with a <tt>application/x-www-form-urlencoded</tt>
      MIME type, as if from an HTML form.
    </p>

    <h2 id="View">Backbone.View</h2>

    <p>
      Backbone views are almost more convention than they are code — they
      don't determine anything about your HTML or CSS for you, and can be used
      with any JavaScript templating library.
      The general idea is to organize your interface into logical views,
      backed by models, each of which can be updated independently when the
      model changes, without having to redraw the page. Instead of digging into
      a JSON object, looking up an element in the DOM, and updating the HTML by hand,
      you can bind your view's <tt>render</tt> function to the model's <tt>"change"</tt>
      event — and now everywhere that
      model data is displayed in the UI, it is always immediately up to date.
    </p>

    <p id="View-extend">
      <b class="header">extend</b><code>Backbone.View.extend(properties, [classProperties])</code>
      <br>
      Get started with views by creating a custom view class. You'll want to
      override the <a href="http://backbonejs.org/#View-render">render</a> function, specify your
      declarative <a href="http://backbonejs.org/#View-delegateEvents">events</a>, and perhaps the
      <tt>tagName</tt>, <tt>className</tt>, or <tt>id</tt> of the View's root
      element.
    </p>

<pre>var DocumentRow = Backbone.View.extend({

  tagName: "li",

  className: "document-row",

  events: {
    "click .icon":          "open",
    "click .button.edit":   "openEditDialog",
    "click .button.delete": "destroy"
  },

  initialize: function() {
    this.listenTo(this.model, "change", this.render);
  },

  render: function() {
    ...
  }

});
</pre>

    <p>
      Properties like <tt>tagName</tt>, <tt>id</tt>, <tt>className</tt>,
      <tt>el</tt>, and <tt>events</tt> may also be defined as a function, if
      you want to wait to define them until runtime.
    </p>

    <p id="View-constructor">
      <b class="header">constructor / initialize</b><code>new View([options])</code>
      <br>
      There are several special
      options that, if passed, will be attached directly to the view:
      <tt>model</tt>, <tt>collection</tt>,
      <tt>el</tt>, <tt>id</tt>, <tt>className</tt>, <tt>tagName</tt>, <tt>attributes</tt> and <tt>events</tt>.
      If the view defines an <b>initialize</b> function, it will be called when
      the view is first created. If you'd like to create a view that references
      an element <i>already</i> in the DOM, pass in the element as an option:
      <tt>new View({el: existingElement})</tt>
    </p>

<pre>var doc = documents.first();

new DocumentRow({
  model: doc,
  id: "document-row-" + doc.id
});
</pre>

    <p id="View-el">
      <b class="header">el</b><code>view.el</code>
      <br>
      All views have a DOM element at all times (the <b>el</b> property),
      whether they've already been inserted into the page or not. In this
      fashion, views can be rendered at any time, and inserted into the DOM all
      at once, in order to get high-performance UI rendering with as few
      reflows and repaints as possible.
    </p>

    <p>
      <tt>this.el</tt> can be resolved from a DOM selector string or an Element;
      otherwise it will be created from the view's <tt>tagName</tt>, <tt>className</tt>,
      <tt>id</tt> and <a href="http://backbonejs.org/#View-attributes"><tt>attributes</tt></a> properties.
      If none are set, <tt>this.el</tt> is an empty <tt>div</tt>, which is often just
      fine. An <b>el</b> reference may also be passed in to the view's constructor.
    </p>

<div class="run" title="Run"></div><pre class="runnable">var ItemView = Backbone.View.extend({
  tagName: 'li'
});

var BodyView = Backbone.View.extend({
  el: 'body'
});

var item = new ItemView();
var body = new BodyView();

alert(item.el + ' ' + body.el);
</pre>

    <p id="View-$el">
      <b class="header">$el</b><code>view.$el</code>
      <br>
      A cached jQuery object for the view's element. A handy
      reference instead of re-wrapping the DOM element all the time.
    </p>

<pre>view.$el.show();

listView.$el.append(itemView.el);
</pre>

    <p id="View-setElement">
      <b class="header">setElement</b><code>view.setElement(element)</code>
      <br>
      If you'd like to apply a Backbone view to a different DOM element, use
      <b>setElement</b>, which will also create the cached <tt>$el</tt> reference
      and move the view's delegated events from the old element to the new one.
    </p>

    <p id="View-attributes">
      <b class="header">attributes</b><code>view.attributes</code>
      <br>
      A hash of attributes that will be set as HTML DOM element attributes on the
      view's <tt>el</tt> (id, class, data-properties, etc.), or a function that
      returns such a hash.
    </p>

    <p id="View-dollar">
      <b class="header">$ (jQuery)</b><code>view.$(selector)</code>
      <br>
      If jQuery is included on the page, each view has a
      <b>$</b> function that runs queries scoped within the view's element. If you use this
      scoped jQuery function, you don't have to use model ids as part of your query
      to pull out specific elements in a list, and can rely much more on HTML class
      attributes. It's equivalent to running: <tt>view.$el.find(selector)</tt>
    </p>

<pre>ui.Chapter = Backbone.View.extend({
  serialize : function() {
    return {
      title: this.$(".title").text(),
      start: this.$(".start-page").text(),
      end:   this.$(".end-page").text()
    };
  }
});
</pre>

    <p id="View-template">
      <b class="header">template</b><code>view.template([data])</code>
      <br>
      While templating for a view isn't a function provided directly by Backbone,
      it's often a nice convention to define a <b>template</b> function on your
      views. In this way, when rendering your view, you have convenient access to
      instance data.
      For example, using Underscore templates:
    </p>

<pre>var LibraryView = Backbone.View.extend({
  template: _.template(...)
});
</pre>

    <p id="View-render">
      <b class="header">render</b><code>view.render()</code>
      <br>
      The default implementation of <b>render</b> is a no-op. Override this
      function with your code that renders the view template from model data,
      and updates <tt>this.el</tt> with the new HTML. A good
      convention is to <tt>return this</tt> at the end of <b>render</b> to
      enable chained calls.
    </p>

<pre>var Bookmark = Backbone.View.extend({
  template: _.template(...),
  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
});
</pre>

    <p>
      Backbone is agnostic with respect to your preferred method of HTML templating.
      Your <b>render</b> function could even munge together an HTML string, or use
      <tt>document.createElement</tt> to generate a DOM tree. However, we suggest
      choosing a nice JavaScript templating library.
      <a href="http://github.com/janl/mustache.js">Mustache.js</a>,
      <a href="http://github.com/creationix/haml-js">Haml-js</a>, and
      <a href="http://github.com/sstephenson/eco">Eco</a> are all fine alternatives.
      Because <a href="http://underscorejs.org/">Underscore.js</a> is already on the page,
      <a href="http://underscorejs.org/#template">_.template</a>
      is available, and is an excellent choice if you prefer simple
      interpolated-JavaScript style templates.
    </p>

    <p>
      Whatever templating strategy you end up with, it's nice if you <i>never</i>
      have to put strings of HTML in your JavaScript. At DocumentCloud, we
      use <a href="http://documentcloud.github.com/jammit/">Jammit</a> in order
      to package up JavaScript templates stored in <tt>/app/views</tt> as part
      of our main <tt>core.js</tt> asset package.
    </p>

    <p id="View-remove">
      <b class="header">remove</b><code>view.remove()</code>
      <br>
      Removes a view and its <tt>el</tt> from the DOM, and calls
      <a href="http://backbonejs.org/#Events-stopListening">stopListening</a> to remove any bound
      events that the view has <a href="http://backbonejs.org/#Events-listenTo">listenTo</a>'d.
    </p>

    <p id="View-events">
      <b class="header">events</b><code>view.events or view.events()</code>
      <br>
      The <b>events</b> hash (or method) can be used to specify a set of DOM
      events that will be bound to methods on your View
      through <a href="http://backbonejs.org/#View-delegateEvents">delegateEvents</a>.
    </p>

    <p>
      Backbone will automatically attach the event listeners at instantiation
      time, right before invoking <a href="http://backbonejs.org/#View-constructor">initialize</a>.
    </p>

<pre>var ENTER_KEY = 13;
var InputView = Backbone.View.extend({

  tagName: 'input',

  events: {
    "keydown" : "keyAction",
  },

  render: function() { ... },

  keyAction: function(e) {
    if (e.which === ENTER_KEY) {
      this.collection.add({text: this.$el.val()});
    }
  }
});
</pre>

    <p id="View-delegateEvents">
      <b class="header">delegateEvents</b><code>delegateEvents([events])</code>
      <br>
      Uses jQuery's <tt>on</tt> function to provide declarative callbacks
      for DOM events within a view.
      If an <b>events</b> hash is not passed directly, uses <tt>this.events</tt>
      as the source. Events are written in the format <tt>{"event selector": "callback"}</tt>.
      The callback may be either the name of a method on the view, or a direct
      function body.
      Omitting the <tt>selector</tt> causes the event to be bound to the view's
      root element (<tt>this.el</tt>). By default, <tt>delegateEvents</tt> is called
      within the View's constructor for you, so if you have a simple <tt>events</tt>
      hash, all of your DOM events will always already be connected, and you will
      never have to call this function yourself.
    </p>

    <p>
      The <tt>events</tt> property may also be defined as a function that returns
      an <b>events</b> hash, to make it easier to programmatically define your
      events, as well as inherit them from parent views.
    </p>

    <p>
      Using <b>delegateEvents</b> provides a number of advantages over manually
      using jQuery to bind events to child elements during <a href="http://backbonejs.org/#View-render">render</a>. All attached
      callbacks are bound to the view before being handed off to jQuery, so when
      the callbacks are invoked, <tt>this</tt> continues to refer to the view object. When
      <b>delegateEvents</b> is run again, perhaps with a different <tt>events</tt>
      hash, all callbacks are removed and delegated afresh — useful for
      views which need to behave differently when in different modes.
    </p>

    <p>
      A single-event version of <b>delegateEvents</b> is available as <tt>delegate</tt>.
      In fact, <b>delegateEvents</b> is simply a multi-event wrapper around <tt>delegate</tt>.
      A counterpart to <tt>undelegateEvents</tt> is available as <tt>undelegate</tt>.
    </p>

    <p>
      A view that displays a document in a search result might look
      something like this:
    </p>

<pre>var DocumentView = Backbone.View.extend({

  events: {
    "dblclick"                : "open",
    "click .icon.doc"         : "select",
    "contextmenu .icon.doc"   : "showMenu",
    "click .show_notes"       : "toggleNotes",
    "click .title .lock"      : "editAccessLevel",
    "mouseover .title .date"  : "showTooltip"
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  open: function() {
    window.open(this.model.get("viewer_url"));
  },

  select: function() {
    this.model.set({selected: true});
  },

  ...

});
</pre>

    <p id="View-undelegateEvents">
      <b class="header">undelegateEvents</b><code>undelegateEvents()</code>
      <br>
      Removes all of the view's delegated events. Useful if you want to disable
      or remove a view from the DOM temporarily.
    </p>

    <h2 id="Utility">Utility</h2>

    <p id="Utility-Backbone-noConflict">
      <b class="header">Backbone.noConflict</b><code>var backbone = Backbone.noConflict();</code>
      <br>
      Returns the <tt>Backbone</tt> object back to its original value. You can
      use the return value of <tt>Backbone.noConflict()</tt> to keep a local
      reference to Backbone. Useful for embedding Backbone on third-party
      websites, where you don't want to clobber the existing Backbone.
    </p>

<pre>var localBackbone = Backbone.noConflict();
var model = localBackbone.Model.extend(...);
</pre>

    <p id="Utility-Backbone-$">
      <b class="header">Backbone.$</b><code>Backbone.$ = $;</code>
      <br>
      If you have multiple copies of <tt>jQuery</tt> on the page, or simply want
      to tell Backbone to use a particular object as its DOM / Ajax library,
      this is the property for you.
    </p>

<pre>Backbone.$ = require('jquery');
</pre>

    <h2 id="faq">F.A.Q.</h2>

    <p id="FAQ-why-backbone">
      <b class="header">Why use Backbone, not [other framework X]?</b>
      <br>
      If your eye hasn't already been caught by the adaptability and elan on display
      in the above <a href="http://backbonejs.org/#examples">list of examples</a>, we can get more specific:
      Backbone.js aims to provide the common foundation that data-rich web applications
      with ambitious interfaces require — while very deliberately avoiding
      painting you into a corner by making any decisions that you're
      better equipped to make yourself.
    </p>

    <ul>
      <li>
        The focus is on supplying you with
        <a href="http://backbonejs.org/#Collection-Underscore-Methods">helpful methods to manipulate and
        query your data</a>, not on HTML widgets or reinventing the JavaScript
        object model.
      </li>
      <li>
        Backbone does not force you to use a single template engine. Views can bind
        to HTML constructed in
        <a href="http://underscorejs.org/#template">your</a>
        <a href="http://guides.rubyonrails.org/layouts_and_rendering.html">favorite</a>
        <a href="http://mustache.github.com/">way</a>.
      </li>
      <li>
        It's smaller. There are fewer kilobytes for your browser or phone to download,
        and less <i>conceptual</i> surface area. You can read and understand
        the source in an afternoon.
      </li>
      <li>
        It doesn't depend on stuffing application logic into your HTML.
        There's no embedded JavaScript, template logic, or binding hookup code in
        <tt>data-</tt> or <tt>ng-</tt> attributes, and no need to invent your own HTML tags.
      </li>
      <li>
        <a href="http://backbonejs.org/#Events">Synchronous events</a> are used as the fundamental
        building block, not a difficult-to-reason-about run loop, or by constantly
        polling and traversing your data structures to hunt for changes. And if
        you want a specific event to be asynchronous and aggregated,
        <a href="http://underscorejs.org/#debounce">no problem</a>.
      </li>
      <li>
        Backbone scales well, from <a href="http://disqus.com/">embedded widgets</a>
        to <a href="http://www.usatoday.com/">massive apps</a>.
      </li>
      <li>
        Backbone is a library, not a framework, and plays well with others.
        You can embed Backbone widgets in Dojo apps without trouble, or use Backbone
        models as the data backing for D3 visualizations (to pick two entirely
        random examples).
      </li>
      <li>
        "Two-way data-binding" is avoided. While it certainly makes for a nifty
        demo, and works for the most basic CRUD, it doesn't tend to be terribly
        useful in your real-world app. Sometimes you want to update on
        every keypress, sometimes on blur, sometimes when the panel is closed,
        and sometimes when the "save" button is clicked. In almost all cases, simply
        serializing the form to JSON is faster and easier. All that aside, if your
        heart is set, <a href="http://rivetsjs.com/">go</a>
        <a href="http://nytimes.github.com/backbone.stickit/">for it</a>.
      </li>
      <li>
        There's no built-in performance penalty for choosing to structure your
        code with Backbone. And if you do want to optimize further, thin models and
        templates with flexible granularity make it easy to squeeze every last
        drop of potential performance out of, say, IE8.
      </li>
    </ul>

    <p id="FAQ-tim-toady">
      <b class="header">There's More Than One Way To Do It</b>
      <br>
      It's common for folks just getting started to treat the examples listed
      on this page as some sort of gospel truth. In fact, Backbone.js is intended
      to be fairly agnostic about many common patterns in client-side code.
      For example...
    </p>

    <p>
      <b>References between Models and Views</b> can be handled several ways.
      Some people like to have direct pointers, where views correspond 1:1 with
      models (<tt>model.view</tt> and <tt>view.model</tt>). Others prefer to have intermediate
      "controller" objects that orchestrate the creation and organization of
      views into a hierarchy. Others still prefer the evented approach, and always
      fire events instead of calling methods directly. All of these styles work well.
    </p>

    <p>
      <b>Batch operations</b> on Models are common, but often best handled differently
      depending on your server-side setup. Some folks don't mind making individual
      Ajax requests. Others create explicit resources for RESTful batch operations:
      <tt>/notes/batch/destroy?ids=1,2,3,4</tt>. Others tunnel REST over JSON, with the
      creation of "changeset" requests:
    </p>

<pre>  {
    "create":  [array of models to create]
    "update":  [array of models to update]
    "destroy": [array of model ids to destroy]
  }
</pre>

    <p>
      <b>Feel free to define your own events.</b> <a href="http://backbonejs.org/#Events">Backbone.Events</a>
      is designed so that you can mix it in to any JavaScript object or prototype.
      Since you can use any string as an event, it's often handy to bind
      and trigger your own custom events: <tt>model.on("selected:true")</tt> or
      <tt>model.on("editing")</tt>
    </p>

    <p>
      <b>Render the UI</b> as you see fit. Backbone is agnostic as to whether you
      use <a href="http://underscorejs.org/#template">Underscore templates</a>,
      <a href="https://github.com/janl/mustache.js">Mustache.js</a>, direct DOM
      manipulation, server-side rendered snippets of HTML, or
      <a href="http://jqueryui.com/">jQuery UI</a> in your <tt>render</tt> function.
      Sometimes you'll create a view for each model ... sometimes you'll have a
      view that renders thousands of models at once, in a tight loop. Both can be
      appropriate in the same app, depending on the quantity of data involved,
      and the complexity of the UI.
    </p>

    <p id="FAQ-nested">
      <b class="header">Nested Models &amp; Collections</b>
      <br>
      It's common to nest collections inside of models with Backbone. For example,
      consider a <tt>Mailbox</tt> model that contains many <tt>Message</tt> models.
      One nice pattern for handling this is have a <tt>this.messages</tt> collection
      for each mailbox, enabling the lazy-loading of messages, when the mailbox
      is first opened ... perhaps with <tt>MessageList</tt> views listening for
      <tt>"add"</tt> and <tt>"remove"</tt> events.
    </p>

<pre>var Mailbox = Backbone.Model.extend({

  initialize: function() {
    this.messages = new Messages;
    this.messages.url = '/mailbox/' + this.id + '/messages';
    this.messages.on("reset", this.updateCounts);
  },

  ...

});

var inbox = new Mailbox;

// And then, when the Inbox is opened:

inbox.messages.fetch({reset: true});
</pre>

    <p>
      If you're looking for something more opinionated, there are a number of
      Backbone plugins that add sophisticated associations among models,
      <a href="https://github.com/jashkenas/backbone/wiki/Extensions%2C-Plugins%2C-Resources">available on the wiki</a>.
    </p>

    <p>
      Backbone doesn't include direct support for nested models and collections
      or "has many" associations because there are a number
      of good patterns for modeling structured data on the client side, and
      <i>Backbone should provide the foundation for implementing any of them.</i>
      You may want to…
    </p>

    <ul>
      <li>
        Mirror an SQL database's structure, or the structure of a NoSQL database.
      </li>
      <li>
        Use models with arrays of "foreign key" ids, and join to top level
        collections (a-la tables).
      </li>
      <li>
        For associations that are numerous, use a range of ids instead of an
        explicit list.
      </li>
      <li>
        Avoid ids, and use direct references, creating a partial object graph
        representing your data set.
      </li>
      <li>
        Lazily load joined models from the server, or lazily deserialize nested
        models from JSON documents.
      </li>
    </ul>

    <p id="FAQ-bootstrap">
      <b class="header">Loading Bootstrapped Models</b>
      <br>
      When your app first loads, it's common to have a set of initial models that
      you know you're going to need, in order to render the page. Instead of
      firing an extra AJAX request to <a href="http://backbonejs.org/#Collection-fetch">fetch</a> them,
      a nicer pattern is to have their data already bootstrapped into the page.
      You can then use <a href="http://backbonejs.org/#Collection-reset">reset</a> to populate your
      collections with the initial data. At DocumentCloud, in the
      <a href="http://en.wikipedia.org/wiki/ERuby">ERB</a> template for the
      workspace, we do something along these lines:
    </p>

<pre>&lt;script&gt;
  var accounts = new Backbone.Collection;
  accounts.reset(&lt;%= @accounts.to_json %&gt;);
  var projects = new Backbone.Collection;
  projects.reset(&lt;%= @projects.to_json(:collaborators =&gt; true) %&gt;);
&lt;/script&gt;
</pre>

    <p>You have to <a href="http://mathiasbynens.be/notes/etago">escape</a>
    <tt>&lt;/</tt> within the JSON string, to prevent javascript injection
    attacks.

    </p><p id="FAQ-extending">
      <b class="header">Extending Backbone</b>
      <br>
      Many JavaScript libraries are meant to be insular and self-enclosed,
      where you interact with them by calling their public API, but never peek
      inside at the guts. Backbone.js is <i>not</i> that kind of library.
    </p>

    <p>
      Because it serves as a foundation for your application, you're meant to
      extend and enhance it in the ways you see fit — the entire source
      code is <a href="http://backbonejs.org/docs/backbone.html">annotated</a> to make this easier
      for you. You'll find that there's very little there apart from core
      functions, and most of those can be overridden or augmented should you find
      the need. If you catch yourself adding methods to <tt>Backbone.Model.prototype</tt>,
      or creating your own base subclass, don't worry — that's how things are
      supposed to work.
    </p>

    <p id="FAQ-mvc">
      <b class="header">How does Backbone relate to "traditional" MVC?</b>
      <br>
      Different implementations of the
      <a href="http://en.wikipedia.org/wiki/Model%E2%80%93View%E2%80%93Controller">Model-View-Controller</a>
      pattern tend to disagree about the definition of a controller. If it helps any, in
      Backbone, the <a href="http://backbonejs.org/#View">View</a> class can also be thought of as a
      kind of controller, dispatching events that originate from the UI, with
      the HTML template serving as the true view. We call it a View because it
      represents a logical chunk of UI, responsible for the contents of a single
      DOM element.
    </p>

    <p>
      Comparing the overall structure of Backbone to a server-side MVC framework
      like <b>Rails</b>, the pieces line up like so:
    </p>

    <ul>
      <li>
        <b>Backbone.Model</b> – Like a Rails model minus the class
        methods. Wraps a row of data in business logic.
      </li>
      <li>
        <b>Backbone.Collection</b> – A group of models on the client-side,
        with sorting/filtering/aggregation logic.
      </li>
      <li>
        <b>Backbone.Router</b> – Rails <tt>routes.rb</tt> + Rails controller
        actions. Maps URLs to functions.
      </li>
      <li>
        <b>Backbone.View</b> – A logical, re-usable piece of UI. Often,
        but not always, associated with a model.
      </li>
      <li>
        <b>Client-side Templates</b> – Rails <tt>.html.erb</tt> views,
        rendering a chunk of HTML.
      </li>
    </ul>

    <p id="FAQ-this">
      <b class="header">Binding "this"</b>
      <br>
      Perhaps the single most common JavaScript "gotcha" is the fact that when
      you pass a function as a callback, its value for <tt>this</tt> is lost.
      When dealing with <a href="http://backbonejs.org/#Events">events</a> and callbacks in Backbone,
      you'll often find it useful to rely on <a href="http://backbonejs.org/#Events-listenTo">listenTo</a>
      or the optional <tt>context</tt> argument that many of Underscore
      and Backbone's methods use to specify the <tt>this</tt>
      that will be used when the callback is later invoked. (See
      <a href="http://underscorejs.org/#each">_.each</a>,
      <a href="http://underscorejs.org/#map">_.map</a>, and
      <a href="http://backbonejs.org/#Events-on">object.on</a>, to name a few).
      <a href="http://backbonejs.org/#View-delegateEvents">View events</a> are automatically bound to
      the view's context for you.
      You may also find it helpful to use
      <a href="http://underscorejs.org/#bind">_.bind</a> and
      <a href="http://underscorejs.org/#bindAll">_.bindAll</a>
      from Underscore.js.
    </p>

<pre>var MessageList = Backbone.View.extend({

  initialize: function() {
    var messages = this.collection;
    messages.on("reset", this.render, this);
    messages.on("add", this.addMessage, this);
    messages.on("remove", this.removeMessage, this);

    messsages.each(this.addMessage, this);
  }

});

// Later, in the app...

Inbox.messages.add(newMessage);
</pre>

    <p id="FAQ-rails">
      <b class="header">Working with Rails</b>
      <br>
      Backbone.js was originally extracted from
      <a href="http://www.documentcloud.org/">a Rails application</a>; getting
      your client-side (Backbone) Models to sync correctly with your server-side
      (Rails) Models is painless, but there are still a few things to be aware of.
    </p>

    <p>
      By default, Rails versions prior to 3.1 add an extra layer of wrapping
      around the JSON representation of models. You can disable this wrapping
      by setting:
    </p>

<pre>ActiveRecord::Base.include_root_in_json = false
</pre>

    <p>
      ... in your configuration. Otherwise, override
      <a href="http://backbonejs.org/#Model-parse">parse</a> to pull model attributes out of the
      wrapper. Similarly, Backbone PUTs and POSTs direct JSON representations
      of models, where by default Rails expects namespaced attributes. You can
      have your controllers filter attributes directly from <tt>params</tt>, or
      you can override <a href="http://backbonejs.org/#Model-toJSON">toJSON</a> in Backbone to add
      the extra wrapping Rails expects.
    </p>

    <h2 id="examples">Examples</h2>

    <p>
      The list of examples that follows, while long, is not exhaustive. If you've
      worked on an app that uses Backbone, please add it to the
      <a href="https://github.com/jashkenas/backbone/wiki/Projects-and-Companies-using-Backbone">wiki page of Backbone apps</a>.
    </p>

    <p id="examples-todos">
      <a href="http://jgn.me/">Jérôme Gravel-Niquet</a> has contributed a
      <a href="http://backbonejs.org/examples/todos/index.html">Todo List application</a>
      that is bundled in the repository as Backbone example. If you're wondering
      where to get started with Backbone in general, take a moment to
      <a href="http://backbonejs.org/docs/todos.html">read through the annotated source</a>. The app uses a
      <a href="http://github.com/jeromegn/Backbone.localStorage">LocalStorage adapter</a>
      to transparently save all of your todos within your browser, instead of
      sending them to a server. Jérôme also has a version hosted at
      <a href="http://localtodos.com/">localtodos.com</a>.
    </p>

    <div style="text-align: center;">
      <a href="http://backbonejs.org/examples/todos/index.html">
        <img width="400" height="427" data-original="docs/images/todos.jpg" alt="Todos" class="example_retina">
      </a>
    </div>

    <h2 id="examples-documentcloud">DocumentCloud</h2>

    <p>
      The <a href="http://www.documentcloud.org/public/#search/">DocumentCloud workspace</a>
      is built on Backbone.js, with <i>Documents</i>, <i>Projects</i>,
      <i>Notes</i>, and <i>Accounts</i> all as Backbone models and collections.
      If you're interested in history — both Underscore.js and Backbone.js
      were originally extracted from the DocumentCloud codebase, and packaged
      into standalone JS libraries.
    </p>

    <div style="text-align: center;">
      <a href="http://www.documentcloud.org/public/#search/">
        <img width="550" height="453" data-original="docs/images/dc-workspace.jpg" alt="DocumentCloud Workspace" class="example_retina">
      </a>
    </div>

    <h2 id="examples-usa-today">USA Today</h2>

    <p>
      <a href="http://usatoday.com/">USA Today</a> takes advantage of the modularity of
      Backbone's data/model lifecycle — which makes it simple to create, inherit,
      isolate, and link application objects — to keep the codebase both manageable and efficient.
      The new website also makes heavy use of the Backbone Router to control the
      page for both pushState-capable and legacy browsers.
      Finally, the team took advantage of Backbone's Event module to create a
      PubSub API that allows third parties and analytics packages to hook into the
      heart of the app.
    </p>

    <div style="text-align: center;">
      <a href="http://usatoday.com/">
        <img width="550" height="532" data-original="docs/images/usa-today.jpg" alt="USA Today" class="example_retina">
      </a>
    </div>

    <h2 id="examples-rdio">Rdio</h2>

    <p>
      <a href="http://rdio.com/new">New Rdio</a> was developed from the ground
      up with a component based framework based on Backbone.js. Every component
      on the screen is dynamically loaded and rendered, with data provided by the
      <a href="http://developer.rdio.com/">Rdio API</a>. When changes are pushed,
      every component can update itself without reloading the page or interrupting
      the user's music. All of this relies on Backbone's views and models,
      and all URL routing is handled by Backbone's Router. When data changes are
      signaled in realtime, Backbone's Events notify the interested components
      in the data changes. Backbone forms the core of the new, dynamic, realtime
      Rdio web and <i>desktop</i> applications.
    </p>

    <div style="text-align: center;">
      <a href="http://rdio.com/new">
        <img width="550" height="344" data-original="docs/images/rdio.jpg" alt="Rdio" class="example_retina">
      </a>
    </div>

    <h2 id="examples-hulu">Hulu</h2>

    <p>
      <a href="http://hulu.com/">Hulu</a> used Backbone.js to build its next
      generation online video experience. With Backbone as a foundation, the
      web interface was rewritten from scratch so that all page content can
      be loaded dynamically with smooth transitions as you navigate.
      Backbone makes it easy to move through the app quickly without the
      reloading of scripts and embedded videos, while also offering models and
      collections for additional data manipulation support.
    </p>

    <div style="text-align: center;">
      <a href="http://hulu.com/">
        <img width="550" height="449" data-original="docs/images/hulu.jpg" alt="Hulu" class="example_retina">
      </a>
    </div>

    <h2 id="examples-quartz">Quartz</h2>

    <p>
      <a href="http://qz.com/">Quartz</a> sees itself as a digitally native news
      outlet for the new
      global economy. Because Quartz believes in the future of open,
      cross-platform web applications, they selected Backbone and Underscore
      to fetch, sort, store, and display content from a custom WordPress
      API. Although <a href="http://qz.com/">qz.com</a> uses responsive design
      for phone, tablet, and
      desktop browsers, it also takes advantage of Backbone events and views
      to render device-specific templates in some cases.
    </p>

    <div style="text-align: center;">
      <a href="http://qz.com/">
        <img width="510" height="360" data-original="docs/images/quartz.jpg" alt="Quartz" class="example_retina">
      </a>
    </div>

    <h2 id="examples-earth">Earth</h2>

    <p>
      <a href="http://earth.nullschool.net/">Earth.nullschool.net</a> displays real-time weather
      conditions on an interactive animated globe, and Backbone provides the
      foundation upon which all of the site's components are built. Despite the
      presence of several other javascript libraries, Backbone's non-opinionated
      design made it effortless to mix-in the <a href="http://backbonejs.org/#Events">Events</a> functionality used for
      distributing state changes throughout the page. When the decision was made
      to switch to Backbone, large blocks of custom logic simply disappeared.
    </p>

    <div style="text-align: center;">
      <a href="http://earth.nullschool.net/">
        <img width="545" height="583" data-original="docs/images/earth.jpg" alt="Earth" class="example_retina">
      </a>
    </div>

    <h2 id="examples-vox">Vox</h2>

    <p>
      Vox Media, the publisher of
      <a href="http://www.sbnation.com/">SB Nation</a>,
      <a href="http://www.theverge.com/">The Verge</a>,
      <a href="http://www.polygon.com/">Polygon</a>,
      <a href="http://www.eater.com/">Eater</a>,
      <a href="http://www.racked.com/">Racked</a>,
      <a href="http://www.curbed.com/">Curbed</a>, and
      <a href="http://www.vox.com/">Vox.com</a>, uses Backbone throughout
      <a href="http://techcrunch.com/2012/05/07/a-closer-look-at-chorus-the-next-generation-publishing-platform-that-runs-vox-media/">Chorus</a>,
      its home-grown publishing platform. Backbone powers the
      <a href="http://product.voxmedia.com/post/25113965826/introducing-syllabus-vox-medias-s3-powered-liveblog">liveblogging platform</a>
      and <a href="http://product.voxmedia.com/2013/11/11/5426878/using-backbone-js-for-sanity-and-stability">commenting system</a>
      used across all Vox Media properties; Coverage, an internal editorial coordination tool;
      <a href="http://www.sbnation.com/college-basketball/2014/4/7/5592112/kentucky-vs-uconn-2014-ncaa-tournament-championship-live-chat">SB Nation Live</a>,
      a live event coverage and chat tool; and
      <a href="http://www.vox.com/cards/ukraine-everything-you-need-to-know/what-is-the-ukraine-crisis">Vox Cards</a>,
      Vox.com's highlighter-and-index-card inspired app for providing context about the news.
    </p>

    <div style="text-align: center;">
      <a href="http://vox.com/">
        <img width="550" height="402" data-original="docs/images/vox.jpg" alt="Vox" class="example_retina">
      </a>
    </div>

    <h2 id="examples-gawker">Gawker Media</h2>

    <p>
      <a href="http://kinja.com/">Kinja</a> is Gawker Media's publishing platform designed
      to create great stories by breaking down the lines between the traditional
      roles of content creators and consumers. Everyone — editors, readers,
      marketers — have access to the same tools to engage in passionate discussion
      and pursue the truth of the story. Sharing, recommending, and following within the
      Kinja ecosystem allows for improved information discovery across all the sites.
    </p>
    <p>
      Kinja is the platform behind
      <a href="http://gawker.com/">Gawker</a>,
      <a href="http://gizmodo.com/">Gizmodo</a>,
      <a href="http://lifehacker.com/">Lifehacker</a>,
      <a href="http://io9.com/">io9</a> and other Gawker Media
      blogs. Backbone.js underlies the front-end application code that powers
      everything from user authentication to post authoring, commenting, and even serving
      ads. The JavaScript stack includes
      <a href="http://underscorejs.org/">Underscore.js</a> and
      <a href="http://jquery.com/">jQuery</a>, with some plugins,
      all loaded with
      <a href="http://requirejs.org/">RequireJS</a>. Closure templates are shared between the
      <a href="http://www.playframework.com/">Play! Framework</a> based Scala application and Backbone views, and the responsive layout
      is done with the
      <a href="http://foundation.zurb.com/">Foundation</a> framework using
      <a href="http://sass-lang.com/">SASS</a>.
    </p>

    <div style="text-align: center;">
      <a href="http://gawker.com/">
        <img width="558" height="473" data-original="docs/images/gawker.jpg" alt="Gawker" class="example_retina">
      </a>
    </div>

    <h2 id="examples-flow">Flow</h2>

    <p>
      <a href="http://www.metalabdesign.com/">MetaLab</a> used Backbone.js to create
      <a href="http://www.getflow.com/">Flow</a>, a task management app for teams. The
      workspace relies on Backbone.js to construct task views, activities, accounts,
      folders, projects, and tags. You can see the internals under <tt>window.Flow</tt>.
    </p>

    <div style="text-align: center;">
      <a href="http://www.getflow.com/">
        <img width="550" height="416" data-original="docs/images/flow.jpg" alt="Flow" class="example_retina">
      </a>
    </div>

    <h2 id="examples-gilt">Gilt Groupe</h2>

    <p>
      <a href="http://gilt.com/">Gilt Groupe</a> uses Backbone.js to build multiple
      applications across their family of sites.
      <a href="http://m.gilt.com/">Gilt's mobile website</a> uses Backbone and
      <a href="http://zeptojs.com/">Zepto.js</a> to create a blazing-fast
      shopping experience for users on-the-go, while
      <a href="http://live.gilt.com/">Gilt Live</a> combines Backbone with
      WebSockets to display the items that customers are buying in real-time. Gilt's search
      functionality also uses Backbone to filter and sort products efficiently
      by moving those actions to the client-side.
    </p>

    <div style="text-align: center;">
      <a href="http://www.gilt.com/">
        <img width="550" height="444" data-original="docs/images/gilt.jpg" alt="Gilt Groupe" class="example_retina">
      </a>
    </div>

    <h2 id="examples-enigma">Enigma</h2>

    <p>
      <a href="http://enigma.io/">Enigma</a> is a portal amassing the largest
      collection of public data produced by governments, universities, companies,
      and organizations. Enigma uses Backbone Models and Collections to represent
      complex data structures; and Backbone's Router gives Enigma users unique URLs for
      application states, allowing them to navigate quickly through the site while
      maintaining the ability to bookmark pages and navigate forward and backward
      through their session.
    </p>

    <div style="text-align: center;">
      <a href="http://www.enigma.io/">
        <img width="550" height="409" data-original="docs/images/enigma.jpg" alt="Enigma" class="example_retina">
      </a>
    </div>

    <h2 id="examples-newsblur">NewsBlur</h2>

    <p>
      <a href="http://www.newsblur.com/">NewsBlur</a> is an RSS feed reader and
      social news network with a fast and responsive UI that feels like a
      native desktop app. Backbone.js was selected for
      <a href="http://www.ofbrooklyn.com/2012/11/13/backbonification-migrating-javascript-to-backbone/">a major rewrite and transition from spaghetti code</a>
      because of its powerful yet simple feature set, easy integration, and large
      community. If you want to poke around under the hood, NewsBlur is also entirely
      <a href="http://github.com/samuelclay/NewsBlur">open-source</a>.
    </p>

    <div style="text-align: center;">
      <a href="http://newsblur.com/">
        <img width="510" height="340" data-original="docs/images/newsblur.jpg" alt="Newsblur" class="example_retina">
      </a>
    </div>

    <h2 id="examples-wordpress">WordPress.com</h2>

    <p>
      <a href="http://wordpress.com/">WordPress.com</a> is the software-as-a-service
      version of <a href="http://wordpress.org/">WordPress</a>. It uses Backbone.js
      Models, Collections, and Views in its
      <a href="http://en.blog.wordpress.com/2012/05/25/notifications-refreshed/">Notifications system</a>.  Backbone.js was selected
      because it was easy to fit into the structure of the application, not the
      other way around. <a href="http://automattic.com/">Automattic</a>
      (the company behind WordPress.com) is integrating Backbone.js into the
      Stats tab and other features throughout the homepage.
    </p>

    <div style="text-align: center;">
      <a href="http://wordpress.com/">
        <img width="550" height="387" data-original="docs/images/wpcom-notifications.jpg" alt="WordPress.com Notifications" title="WordPress.com Notifications" class="example_retina">
      </a>
    </div>

    <h2 id="examples-foursquare">Foursquare</h2>

    <p>
      Foursquare is a fun little startup that helps you meet up with friends,
      discover new places, and save money. Backbone Models are heavily used in
      the core JavaScript API layer and Views power many popular features like
      the <a href="https://foursquare.com/">homepage map</a> and
      <a href="https://foursquare.com/seriouseats/list/the-best-doughnuts-in-ny">lists</a>.
    </p>

    <div style="text-align: center;">
      <a href="http://foursquare.com/">
        <img width="550" height="427" data-original="docs/images/foursquare.jpg" alt="Foursquare" class="example_retina">
      </a>
    </div>

    <h2 id="examples-bitbucket">Bitbucket</h2>

    <p>
      <a href="http://www.bitbucket.org/">Bitbucket</a> is a free source code hosting
      service for Git and Mercurial. Through its models and collections,
      Backbone.js has proved valuable in supporting Bitbucket's
      <a href="https://api.bitbucket.org/">REST API</a>, as well as newer
      components such as in-line code comments and approvals for pull requests.
      Mustache templates provide server and client-side rendering, while a custom
      <a href="https://developers.google.com/closure/library/">Google Closure</a>
      inspired life-cycle for widgets allows Bitbucket to decorate existing DOM
      trees and insert new ones.
    </p>

    <div style="text-align: center;">
      <a href="http://www.bitbucket.org/">
        <img width="550" height="356" data-original="docs/images/bitbucket.jpg" alt="Bitbucket" class="example_retina">
      </a>
    </div>

    <h2 id="examples-disqus">Disqus</h2>

    <p>
      <a href="http://www.disqus.com/">Disqus</a> chose Backbone.js to power the
      latest version of their commenting widget. Backbone’s small
      footprint and easy extensibility made it the right choice for Disqus’
      distributed web application, which is hosted entirely inside an iframe and
      served on thousands of large web properties, including IGN, Wired, CNN, MLB, and more.
    </p>

    <div style="text-align: center;">
      <a href="http://www.disqus.com/">
        <img width="550" height="454" data-original="docs/images/disqus.jpg" alt="Disqus" class="example_retina">
      </a>
    </div>

    <h2 id="examples-delicious">Delicious</h2>

    <p>
      <a href="https://delicious.com/">Delicious</a> is a social bookmarking
      platform making it easy to save, sort, and store bookmarks from across
      the web. Delicious uses <a href="http://chaplinjs.org/">Chaplin.js</a>,
      Backbone.js and AppCache to build a full-featured MVC web app.
      The use of Backbone helped the website and
      <a href="http://delicious.com/tools">mobile apps</a> share a
      single API service, and the reuse of the model tier made it significantly
      easier to share code during the recent Delicious redesign.
    </p>

    <div style="text-align: center;">
      <a href="http://www.delicious.com/">
        <img width="510" height="321" data-original="docs/images/delicious.jpg" alt="Delicious" class="example_retina">
      </a>
    </div>

    <h2 id="examples-khan-academy">Khan Academy</h2>

    <p>
      <a href="http://www.khanacademy.org/">Khan Academy</a> is on a mission to
      provide a free world-class education to anyone anywhere. With thousands of
      videos, hundreds of JavaScript-driven exercises, and big plans for the
      future, Khan Academy uses Backbone to keep frontend code modular and organized.
      User profiles and goal setting are implemented with Backbone,
      <a href="http://jquery.com/">jQuery</a> and
      <a href="http://handlebarsjs.com/">Handlebars</a>, and most new feature
      work is being pushed to the client side, greatly increasing the quality of
      <a href="https://github.com/Khan/khan-api/">the API</a>.
    </p>

    <div style="text-align: center;">
      <a href="http://www.khanacademy.org/">
        <img width="550" height="454" data-original="docs/images/khan-academy.jpg" alt="Khan Academy" class="example_retina">
      </a>
    </div>

    <h2 id="examples-irccloud">IRCCloud</h2>

    <p>
      <a href="http://irccloud.com/">IRCCloud</a>
      is an always-connected IRC client that you use in your
      browser — often leaving it open all day in a tab.
      The sleek web interface communicates with an
      Erlang backend via websockets and the
      <a href="https://github.com/irccloud/irccloud-tools/wiki/API-Overview">IRCCloud API</a>.
      It makes heavy use of Backbone.js events, models, views and routing to keep
      your IRC conversations flowing in real time.
    </p>

    <div style="text-align: center;">
      <a href="http://irccloud.com/">
        <img width="550" height="392" data-original="docs/images/irccloud.png" alt="IRCCloud" class="example_image">
      </a>
    </div>

    <h2 id="examples-pitchfork">Pitchfork</h2>

    <p>
      <a href="http://pitchfork.com/">Pitchfork</a> uses Backbone.js to power
      its site-wide audio player, <a href="http://pitchfork.com/tv/">Pitchfork.tv</a>,
      location routing, a write-thru page fragment cache, and more. Backbone.js
      (and <a href="http://underscorejs.org/">Underscore.js</a>) helps the team
      create clean and modular components,
      move very quickly, and focus on the site, not the spaghetti.
    </p>

    <div style="text-align: center;">
      <a href="http://pitchfork.com/">
        <img width="550" height="428" data-original="docs/images/pitchfork.jpg" alt="Pitchfork" class="example_retina">
      </a>
    </div>

    <h2 id="examples-spin">Spin</h2>

    <p>
      <a href="http://spin.com/">Spin</a> pulls in the
      <a href="http://www.spin.com/news">latest news stories</a> from
      their internal API onto their site using Backbone models and collections, and a
      custom <tt>sync</tt> method. Because the music should never stop playing,
      even as you click through to different "pages", Spin uses a Backbone router
      for navigation within the site.
    </p>

    <div style="text-align: center;">
      <a href="http://spin.com/">
        <img width="550" height="543" data-original="docs/images/spin.jpg" alt="Spin" class="example_retina">
      </a>
    </div>

    <h2 id="examples-zocdoc">ZocDoc</h2>

    <p>
      <a href="http://www.zocdoc.com/">ZocDoc</a> helps patients
      find local, in-network doctors and dentists, see their real-time
      availability, and instantly book appointments.
      On the public side, the webapp uses Backbone.js to handle client-side state and rendering in
      <a href="http://www.zocdoc.com/primary-care-doctors/los-angeles-13122pm">search pages</a>
      and <a href="http://www.zocdoc.com/doctor/nathan-hashimoto-md-58078">doctor profiles</a>.
      In addition, the new version of the doctor-facing part of the website is a
      large single-page application that
      benefits from Backbone's structure and modularity. ZocDoc's Backbone
      classes are tested with
      <a href="http://pivotal.github.io/jasmine/">Jasmine</a>, and delivered
      to the end user with
      <a href="http://getcassette.net/">Cassette</a>.
    </p>

    <div style="text-align: center;">
      <a href="http://www.zocdoc.com/">
        <img width="510" height="464" data-original="docs/images/zocdoc.jpg" alt="ZocDoc" class="example_retina">
      </a>
    </div>

    <h2 id="examples-walmart">Walmart Mobile</h2>

    <p>
      <a href="http://www.walmart.com/">Walmart</a> used Backbone.js to create the new version
      of <a href="http://mobile.walmart.com/">their mobile web application</a> and
      created two new frameworks in the process.
      <a href="http://walmartlabs.github.com/thorax/">Thorax</a> provides mixins, inheritable
      events, as well as model and collection view bindings that integrate directly with
      <a href="http://handlebarsjs.com/">Handlebars</a> templates.
      <a href="http://walmartlabs.github.com/lumbar/">Lumbar</a> allows the application to be
      split into modules which can be loaded on demand, and creates platform specific builds
      for the portions of the web application that are embedded in Walmart's native Android
      and iOS applications.
    </p>

    <div style="text-align: center;">
      <a href="http://mobile.walmart.com/r/phoenix">
        <img width="256" height="534" data-original="docs/images/walmart-mobile.png" alt="Walmart Mobile" class="example_image">
      </a>
    </div>

    <h2 id="examples-groupon">Groupon Now!</h2>

    <p>
      <a href="http://www.groupon.com/now">Groupon Now!</a> helps you find
      local deals that you can buy and use right now. When first developing
      the product, the team decided it would be AJAX heavy with smooth transitions
      between sections instead of full refreshes, but still needed to be fully
      linkable and shareable. Despite never having used Backbone before, the
      learning curve was incredibly quick — a prototype was hacked out in an
      afternoon, and the team was able to ship the product in two weeks.
      Because the source is minimal and understandable, it was easy to
      add several Backbone extensions for Groupon Now!: changing the router
      to handle URLs with querystring parameters, and adding a simple
      in-memory store for caching repeated requests for the same data.
    </p>

    <div style="text-align: center;">
      <a href="http://www.groupon.com/now">
        <img width="550" height="466" data-original="docs/images/groupon.jpg" alt="Groupon Now!" class="example_retina">
      </a>
    </div>

    <h2 id="examples-basecamp">Basecamp</h2>

    <p>
      <a href="http://37signals.com/">37Signals</a> chose Backbone.js to create
      the <a href="http://basecamp.com/calendar">calendar feature</a> of its
      popular project management software <a href="http://basecamp.com/">Basecamp</a>.
      The Basecamp Calendar uses Backbone.js models and views in conjunction with the
      <a href="https://github.com/sstephenson/eco">Eco</a> templating system to
      present a polished, highly interactive group scheduling interface.
    </p>

    <div style="text-align: center;">
      <a href="http://basecamp.com/calendar">
        <img width="530" height="380" data-original="docs/images/basecamp-calendar.jpg" alt="Basecamp Calendar" class="example_retina">
      </a>
    </div>

    <h2 id="examples-slavery-footprint">Slavery Footprint</h2>

    <p>
      <a href="http://slaveryfootprint.org/survey">Slavery Footprint</a>
      allows consumers to visualize how their consumption habits are
      connected to modern-day slavery and provides them with an opportunity
      to have a deeper conversation with the companies that manufacture the
      goods they purchased.
      Based in Oakland, California, the Slavery Footprint team works to engage
      individuals, groups, and businesses to build awareness for and create
      deployable action against forced labor, human trafficking, and modern-day
      slavery through online tools, as well as off-line community education and
      mobilization programs.
    </p>

    <div style="text-align: center;">
      <a href="http://slaveryfootprint.org/survey">
        <img width="550" height="394" data-original="docs/images/slavery-footprint.jpg" alt="Slavery Footprint" class="example_retina">
      </a>
    </div>

    <h2 id="examples-stripe">Stripe</h2>

    <p>
      <a href="https://stripe.com/">Stripe</a> provides an API for accepting
      credit cards on the web. Stripe's
      <a href="https://manage.stripe.com/">management interface</a> was recently
      rewritten from scratch in CoffeeScript using Backbone.js as the primary
      framework, <a href="https://github.com/sstephenson/eco">Eco</a> for templates, <a href="http://sass-lang.com/">Sass</a> for stylesheets, and <a href="https://github.com/sstephenson/stitch">Stitch</a> to package
      everything together as <a href="http://commonjs.org/">CommonJS</a> modules. The new app uses
      <a href="https://stripe.com/docs/api">Stripe's API</a> directly for the
      majority of its actions; Backbone.js models made it simple to map
      client-side models to their corresponding RESTful resources.
    </p>

    <div style="text-align: center;">
      <a href="https://stripe.com/">
        <img width="555" height="372" data-original="docs/images/stripe.png" alt="Stripe" class="example_retina">
      </a>
    </div>

    <h2 id="examples-airbnb">Airbnb</h2>

    <p>
      <a href="http://airbnb.com/">Airbnb</a> uses Backbone in many of its products.
      It started with <a href="http://m.airbnb.com/">Airbnb Mobile Web</a>
      (built in six weeks by a team of three) and has since grown to
      <a href="https://www.airbnb.com/wishlists/popular">Wish Lists</a>,
      <a href="http://www.airbnb.com/match">Match</a>,
      <a href="http://www.airbnb.com/s/">Search</a>, Communities, Payments, and
      Internal Tools.
    </p>

    <div style="text-align: center;">
      <a href="http://m.airbnb.com/">
        <img width="500" height="489" data-original="docs/images/airbnb.png" alt="Airbnb" class="example_image">
      </a>
    </div>

    <h2 id="examples-soundcloud">SoundCloud Mobile</h2>

    <p>
      <a href="http://soundcloud.com/">SoundCloud</a> is the leading sound sharing
      platform on the internet, and Backbone.js provides the foundation for
      <a href="http://m.soundcloud.com/">SoundCloud Mobile</a>. The project uses
      the public SoundCloud <a href="http://soundcloud.com/developers">API</a>
      as a data source (channeled through a nginx proxy),
      <a href="http://api.jquery.com/category/plugins/templates/">jQuery templates</a>
      for the rendering, <a href="http://docs.jquery.com/Qunit">Qunit
      </a> and <a href="http://www.phantomjs.org/">PhantomJS</a> for
      the testing suite. The JS code, templates and CSS are built for the
      production deployment with various Node.js tools like
      <a href="https://github.com/dsimard/ready.js">ready.js</a>,
      <a href="https://github.com/mde/jake">Jake</a>,
      <a href="https://github.com/tmpvar/jsdom">jsdom</a>.
      The <b>Backbone.History</b> was modified to support the HTML5 <tt>history.pushState</tt>.
      <b>Backbone.sync</b> was extended with an additional SessionStorage based cache
      layer.
    </p>

    <div style="text-align: center;">
      <a href="http://m.soundcloud.com/">
        <img width="266" height="555" data-original="docs/images/soundcloud.png" alt="SoundCloud" class="example_image">
      </a>
    </div>

    <h2 id="examples-artsy">Art.sy</h2>

    <p>
      <a href="http://artsy.net/">Art.sy</a> is a place to discover art you'll
      love. Art.sy is built on Rails, using
      <a href="https://github.com/intridea/grape">Grape</a> to serve a robust
      <a href="http://artsy.net/api">JSON API</a>. The main site is a single page
      app written in CoffeeScript and uses Backbone to provide structure around
      this API. An admin panel and partner CMS have also been extracted into
      their own API-consuming Backbone projects.
    </p>

    <div style="text-align: center;">
      <a href="http://artsy.net/">
        <img width="550" height="550" data-original="docs/images/artsy.jpg" alt="Art.sy" class="example_retina">
      </a>
    </div>

    <h2 id="examples-pandora">Pandora</h2>

    <p>
      When <a href="http://www.pandora.com/newpandora">Pandora</a> redesigned
      their site in HTML5, they chose Backbone.js to help
      manage the user interface and interactions. For example, there's a model
      that represents the "currently playing track", and multiple views that
      automatically update when the current track changes. The station list is a
      collection, so that when stations are added or changed, the UI stays up to date.
    </p>

    <div style="text-align: center;">
      <a href="http://www.pandora.com/newpandora">
        <img width="476" height="359" data-original="docs/images/pandora.jpg" alt="Pandora" class="example_retina">
      </a>
    </div>

    <h2 id="examples-inkling">Inkling</h2>

    <p>
      <a href="http://inkling.com/">Inkling</a> is a cross-platform way to
      publish interactive learning content.
      <a href="https://www.inkling.com/read/">Inkling for Web</a> uses Backbone.js
      to make hundreds of complex books — from student textbooks to travel guides and
      programming manuals — engaging and accessible on the web. Inkling supports
      WebGL-enabled 3D graphics, interactive assessments, social sharing,
      and a system for running practice code right
      in the book, all within a single page Backbone-driven app. Early on, the
      team decided to keep the site lightweight by using only Backbone.js and
      raw JavaScript. The result? Complete source code weighing in at a mere
      350kb with feature-parity across the iPad, iPhone and web clients.
      Give it a try with
      <a href="https://www.inkling.com/read/javascript-definitive-guide-david-flanagan-6th/chapter-4/function-definition-expressions">this excerpt from JavaScript: The Definitive Guide</a>.
    </p>

    <div style="text-align: center;">
      <a href="http://inkling.com/">
        <img width="550" height="361" data-original="docs/images/inkling.jpg" alt="Inkling" class="example_retina">
      </a>
    </div>

    <h2 id="examples-code-school">Code School</h2>

    <p>
      <a href="http://www.codeschool.com/">Code School</a> courses teach people
      about various programming topics like <a href="http://coffeescript.org/">CoffeeScript</a>, CSS, Ruby on Rails,
      and more. The new Code School course
      <a href="http://coffeescript.codeschool.com/levels/1/challenges/1">challenge page</a>
      is built from the ground up on Backbone.js, using
      everything it has to offer: the router, collections, models, and complex
      event handling. Before, the page was a mess of <a href="http://jquery.com/">jQuery</a> DOM manipulation
      and manual Ajax calls. Backbone.js helped introduce a new way to
      think about developing an organized front-end application in JavaScript.
    </p>

    <div style="text-align: center;">
      <a href="http://www.codeschool.com/">
        <img width="550" height="482" data-original="docs/images/code-school.jpg" alt="Code School" class="example_retina">
      </a>
    </div>

    <h2 id="examples-cloudapp">CloudApp</h2>

    <p>
      <a href="http://getcloudapp.com/">CloudApp</a> is simple file and link
      sharing for the Mac. Backbone.js powers the web tools
      which consume the <a href="http://developer.getcloudapp.com/">documented API</a>
      to manage Drops. Data is either pulled manually or pushed by
      <a href="http://pusher.com/">Pusher</a> and fed to
      <a href="http://github.com/janl/mustache.js">Mustache</a> templates for
      rendering. Check out the <a href="http://cloudapp.github.com/engine">annotated source code</a>
      to see the magic.
    </p>

    <div style="text-align: center;">
      <a href="http://getcloudapp.com/">
        <img width="550" height="426" data-original="docs/images/cloudapp.jpg" alt="CloudApp" class="example_retina">
      </a>
    </div>

    <h2 id="examples-seatgeek">SeatGeek</h2>

    <p>
      <a href="http://seatgeek.com/">SeatGeek</a>'s stadium ticket maps were originally
      developed with <a href="http://prototypejs.org/">Prototype.js</a>. Moving to Backbone.js and <a href="http://jquery.com/">jQuery</a> helped organize
      a lot of the UI code, and the increased structure has made adding features
      a lot easier. SeatGeek is also in the process of building a mobile
      interface that will be Backbone.js from top to bottom.
    </p>

    <div style="text-align: center;">
      <a href="http://seatgeek.com/">
        <img width="550" height="455" data-original="docs/images/seatgeek.jpg" alt="SeatGeek" class="example_retina">
      </a>
    </div>

    <h2 id="examples-easel">Easel</h2>

    <p>
      <a href="http://easel.io/">Easel</a> is an in-browser, high fidelity web
      design tool that integrates with your design and development
      process. The Easel team uses CoffeeScript, Underscore.js and Backbone.js for
      their <a href="http://easel.io/demo">rich visual editor</a> as well as other
      management functions throughout the site. The structure of Backbone allowed
      the team to break the complex problem of building a visual editor into
      manageable components and still move quickly.
    </p>

    <div style="text-align: center;">
      <a href="http://easel.io/">
        <img width="550" height="395" data-original="docs/images/easel.jpg" alt="Easel" class="example_retina">
      </a>
    </div>

    <h2 id="examples-jolicloud">Jolicloud</h2>

    <p>
      <a href="http://www.jolicloud.com/">Jolicloud</a> is an open and independent
      platform and <a href="http://www.jolicloud.com/jolios">operating system</a>
      that provides music playback, video streaming, photo browsing and
      document editing — transforming low cost computers into beautiful cloud devices.
      The <a href="https://my.jolicloud.com/">new Jolicloud HTML5 app</a> was built
      from the ground up using Backbone and talks to the
      <a href="http://developers.jolicloud.com/">Jolicloud Platform</a>, which is
      based on Node.js. Jolicloud works offline using the HTML5 AppCache, extends
      Backbone.sync to store data in IndexedDB or localStorage, and communicates
      with the <a href="http://www.jolicloud.com/jolios">Joli OS</a> via WebSockets.
    </p>

    <div style="text-align: center;">
      <a href="http://jolicloud.com/">
        <img width="510" height="384" data-original="docs/images/jolicloud.jpg" alt="Jolicloud" class="example_retina">
      </a>
    </div>

    <h2 id="examples-salon">Salon.io</h2>

    <p>
      <a href="http://salon.io/">Salon.io</a> provides a space where photographers,
      artists and designers freely arrange their visual art on virtual walls.
      <a href="http://salon.io/">Salon.io</a> runs on <a href="http://rubyonrails.org/">Rails</a>, but does not use
      much of the traditional stack, as the entire frontend is designed as a
      single page web app, using Backbone.js, <a href="http://brunch.io/">Brunch</a> and
      <a href="http://coffeescript.org/">CoffeeScript</a>.
    </p>

    <div style="text-align: center;">
      <a href="http://salon.io/">
        <img width="550" height="483" data-original="docs/images/salon.jpg" alt="Salon.io" class="example_retina">
      </a>
    </div>

    <h2 id="examples-tilemill">TileMill</h2>

    <p>
      Our fellow
      <a href="http://www.newschallenge.org/">Knight Foundation News Challenge</a>
      winners, <a href="http://mapbox.com/">MapBox</a>, created an open-source
      map design studio with Backbone.js:
      <a href="https://www.mapbox.com/tilemill/">TileMill</a>.
      TileMill lets you manage map layers based on shapefiles and rasters, and
      edit their appearance directly in the browser with the
      <a href="https://github.com/mapbox/carto">Carto styling language</a>.
      Note that the gorgeous <a href="http://mapbox.com/">MapBox</a> homepage
      is also a Backbone.js app.
    </p>

    <div style="text-align: center;">
      <a href="https://www.mapbox.com/tilemill/">
        <img width="544" height="375" data-original="docs/images/tilemill.jpg" alt="TileMill" class="example_retina">
      </a>
    </div>

    <h2 id="examples-blossom">Blossom</h2>

    <p>
      <a href="http://blossom.io/">Blossom</a> is a lightweight project management
      tool for lean teams. Backbone.js is heavily used in combination with
      <a href="http://coffeescript.org/">CoffeeScript</a> to provide a smooth
      interaction experience. The app is packaged with <a href="http://brunch.io/">Brunch</a>.
      The RESTful backend is built with <a href="http://flask.pocoo.org/">Flask</a> on Google App Engine.
    </p>

    <div style="text-align: center;">
      <a href="http://blossom.io/">
        <img width="550" height="367" data-original="docs/images/blossom.jpg" alt="Blossom" class="example_retina">
      </a>
    </div>

    <h2 id="examples-trello">Trello</h2>

    <p>
      <a href="http://trello.com/">Trello</a> is a collaboration tool that
      organizes your projects into boards. A Trello board holds many lists of
      cards, which can contain checklists, files and conversations, and may be
      voted on and organized with labels. Updates on the board happen in
      real time. The site was built ground up using Backbone.js for all the
      models, views, and routes.
    </p>

    <div style="text-align: center;">
      <a href="http://trello.com/">
        <img width="550" height="416" data-original="docs/images/trello.jpg" alt="Trello" class="example_retina">
      </a>
    </div>

    <h2 id="examples-tzigla">Tzigla</h2>

    <p>
      <a href="http://twitter.com/evilchelu">Cristi Balan</a> and
      <a href="http://dira.ro/">Irina Dumitrascu</a> created
      <a href="http://tzigla.com/">Tzigla</a>, a collaborative drawing
      application where artists make tiles that connect to each other to
      create <a href="http://tzigla.com/boards/1">surreal drawings</a>.
      Backbone models help organize the code, routers provide
      <a href="http://tzigla.com/boards/1#!/tiles/2-2">bookmarkable deep links</a>,
      and the views are rendered with
      <a href="https://github.com/creationix/haml-js">haml.js</a> and
      <a href="http://zeptojs.com/">Zepto</a>.
      Tzigla is written in Ruby (<a href="http://rubyonrails.org/">Rails</a>) on the backend, and
      <a href="http://coffeescript.org/">CoffeeScript</a> on the frontend, with
      <a href="http://documentcloud.github.com/jammit/">Jammit</a>
      prepackaging the static assets.
    </p>

    <div style="text-align: center;">
      <a href="http://www.tzigla.com/">
        <img width="550" height="376" data-original="docs/images/tzigla.jpg" alt="Tzigla" class="example_retina">
      </a>
    </div>

    <h2 id="changelog">Change Log</h2>

    <b class="header">1.3.3</b> — <small><i>Apr. 5, 2016</i></small>
    — <a href="https://github.com/jashkenas/backbone/compare/1.2.3...1.3.3">Diff</a>
    — <a href="https://cdn.rawgit.com/jashkenas/backbone/1.3.3/index.html">Docs</a>
    <br>
    <ul style="margin-top: 5px;">
      <li>
        Added <tt>findIndex</tt> and <tt>findLastIndex</tt> Underscore methods to
        <tt>Collection</tt>.
      </li>
      <li>
        Added <tt>options.changes</tt> to <tt>Collection</tt> "update" event which
        includes added, merged, and removed models.
      </li>
      <li>
        Ensured <tt>Collection#reduce</tt> and <tt>Collection#reduceRight</tt>
        work without an initial <tt>accumulator</tt> value.
      </li>
      <li>
        Ensured <tt>Collection#_removeModels</tt> always returns an array.
      </li>
      <li>
        Fixed a bug where <tt>Events.once</tt> with object syntax failed to bind
        context.
      </li>
      <li>
        Fixed <tt>Collection#_onModelEvent</tt> regression where triggering a
        <tt>change</tt> event without a <tt>model</tt> would error.
      </li>
      <li>
        Fixed <tt>Collection#set</tt> regression when <tt>parse</tt> returns a
        falsy value.
      </li>
      <li>
        Fixed <tt>Model#id</tt> regression where <tt>id</tt> would be
        unintentionally <tt>undefined</tt>.
      </li>
      <li>
        Fixed <tt>_removeModels</tt> regression which could cause an infinite loop
        under certain conditions.
      </li>
      <li>
        Removed <tt>component</tt> package support.
      </li>
      <li>
        Note that 1.3.3 fixes several bugs in versions 1.3.0 to 1.3.2. Please upgrade
        immediately if you are on one of those versions.
      </li>
    </ul>

    <b class="header">1.2.3</b> — <small><i>Sept. 3, 2015</i></small>
    — <a href="https://github.com/jashkenas/backbone/compare/1.2.2...1.2.3">Diff</a>
    — <a href="https://cdn.rawgit.com/jashkenas/backbone/1.2.3/index.html">Docs</a>
    <br>
    <ul style="margin-top: 5px;">
      <li>
        Fixed a minor regression in 1.2.2 that would cause an error when adding
        a model to a collection <tt>at</tt> an out of bounds index.
      </li>
    </ul>

    <b class="header">1.2.2</b> — <small><i>Aug. 19, 2015</i></small>
    — <a href="https://github.com/jashkenas/backbone/compare/1.2.1...1.2.2">Diff</a>
    — <a href="https://cdn.rawgit.com/jashkenas/backbone/1.2.2/index.html">Docs</a>
    <br>
    <ul style="margin-top: 5px;">
      <li>
        Collection methods <tt>find</tt>, <tt>filter</tt>, <tt>reject</tt>, <tt>every</tt>,
        <tt>some</tt>, and <tt>partition</tt> can now take a model-attributes-style predicate:
        <tt>this.collection.reject({user: 'guybrush'})</tt>.
      </li>
      <li>
        Backbone Events once again supports multiple-event maps
        (<tt>obj.on({'error change': action})</tt>). This was a previously
        undocumented feature inadvertently removed in 1.2.0.
      </li>
      <li>
        Added <tt>Collection#includes</tt> as an alias of <tt>Collection#contains</tt>
        and as a replacement for <tt>Collection#include</tt> in Underscore.js &gt;= 1.8.
      </li>
    </ul>

    <b class="header">1.2.1</b> — <small><i>Jun. 4, 2015</i></small>
    — <a href="https://github.com/jashkenas/backbone/compare/1.2.0...1.2.1">Diff</a>
    — <a href="https://cdn.rawgit.com/jashkenas/backbone/1.2.1/index.html">Docs</a>
    <br>
    <ul style="margin-top: 5px;">
      <li>
        <tt>Collection#add</tt> now avoids trying to parse a model instance when passed <tt>parse: false</tt>.
      </li>
      <li>
        Bug fix in <tt>Collection#remove</tt>. The removed models are now actually returned.
      </li>
      <li>
        <tt>Model#fetch</tt> no longer parses the response when passing <tt>patch: false</tt>.
      </li>
      <li>
        Bug fix for iframe-based History when used with JSDOM.
      </li>
      <li>
        Bug fix where <tt>Collection#invoke</tt> was not taking additional arguments.
      </li>
      <li>
        When using <tt>on</tt> with an event map, you can now pass the context as the
        second argument. This was a previously undocumented feature inadvertently
        removed in 1.2.0.
      </li>
    </ul>

    <b class="header">1.2.0</b> — <small><i>May 13, 2015</i></small>
    — <a href="https://github.com/jashkenas/backbone/compare/1.1.2...1.2.0">Diff</a>
    — <a href="https://cdn.rawgit.com/jashkenas/backbone/1.2.0/index.html">Docs</a>
    <br>
    <ul style="margin-top: 5px;">
      <li>
        Added new hooks to Views to allow them to work without jQuery. See the
        <a href="https://github.com/jashkenas/backbone/wiki/Using-Backbone-without-jQuery">wiki page</a>
        for more info.
      </li>
      <li>
        As a neat side effect, Backbone.History no longer uses jQuery's
        event methods for <tt>pushState</tt> and <tt>hashChange</tt> listeners.
        We're native all the way.
      </li>
      <li>
        Also on the subject of jQuery, if you're using Backbone with CommonJS (node, browserify, webpack)
        Backbone will automatically try to load jQuery for you.
      </li>
      <li>
        Views now always delegate their events in <a href="http://backbonejs.org/#View-setElement">setElement</a>.
        You can no longer modify the events hash or your view's <tt>el</tt> property in
        <tt>initialize</tt>.
      </li>
      <li>
        Added an <tt>"update"</tt> event that triggers after any amount of
        models are added or removed from a collection. Handy to re-render lists
        of things without debouncing.
      </li>
      <li>
        <tt>Collection#at</tt> can take a negative index.
      </li>
      <li>
        Added <tt>modelId</tt> to Collection for generating unique ids on
        polymorphic collections. Handy for cases when your model ids would
        otherwise collide.
      </li>
      <li>
        Added an overridable <tt>_isModel</tt> for more advanced
        control of what's considered a model by your Collection.
      </li>
      <li>
        The <tt>success</tt> callback passed to <tt>Model#destroy</tt> is always
        called asynchronously now.
      </li>
      <li>
        <tt>Router#execute</tt> passes back the route name as its third argument.
      </li>
      <li>
        Cancel the current Router transition by returning <tt>false</tt> in
        <tt>Router#execute</tt>. Great for checking logged-in status or other
        prerequisites.
      </li>
      <li>
        Added <tt>getSearch</tt> and <tt>getPath</tt> methods to Backbone.History as
        cross-browser and overridable ways of slicing up the URL.
      </li>
      <li>
        Added <tt>delegate</tt> and <tt>undelegate</tt> as finer-grained versions
        of <tt>delegateEvents</tt> and <tt>undelegateEvents</tt>. Useful for plugin
        authors to use a consistent events interface in Backbone.
      </li>
      <li>
        A collection will only fire a "sort" event if its order was actually
        updated, not on every <tt>set</tt>.
      </li>
      <li>
        Any passed <tt>options.attrs</tt> are now respected when saving a model with
        <tt>patch: true</tt>.
      </li>
      <li>
        <tt>Collection#clone</tt> now sets the <tt>model</tt> and <tt>comparator</tt>
        functions of the cloned collection to the new one.
      </li>
      <li>
        Adding models to your Collection when specifying an <tt>at</tt> position
        now sends the actual position of your model in the <tt>add</tt>
        event, not just the one you've passed in.
      </li>
      <li>
        <tt>Collection#remove</tt> will now only return a list of models that
        have actually been removed from the collection.
      </li>
      <li>
        Fixed loading Backbone.js in strict ES6 module loaders.
      </li>
    </ul>

    <b class="header">1.1.2</b> — <small><i>Feb. 20, 2014</i></small>
    — <a href="https://github.com/jashkenas/backbone/compare/1.1.1...1.1.2">Diff</a>
    — <a href="https://cdn.rawgit.com/jashkenas/backbone/1.1.2/index.html">Docs</a>
    <br>
    <ul style="margin-top: 5px;">
      <li>
        Backbone no longer tries to require jQuery in Node/CommonJS environments,
        for better compatibility with folks using Browserify.
        If you'd like to have Backbone use jQuery from Node, assign it like so:
        <tt>Backbone.$ = require('jquery');</tt>
      </li>
      <li>
        Bugfix for route parameters with newlines in them.
      </li>
    </ul>

    <b class="header">1.1.1</b> — <small><i>Feb. 13, 2014</i></small> — <a href="https://github.com/jashkenas/backbone/compare/1.1.0...1.1.1">Diff</a> — <a href="https://cdn.rawgit.com/jashkenas/backbone/1.1.1/index.html">Docs</a><br>
    <ul style="margin-top: 5px;">
      <li>
        Backbone now registers itself for AMD (Require.js), Bower and Component,
        as well as being a CommonJS module and a regular (Java)Script. Whew.
      </li>
      <li>
        Added an <tt>execute</tt> hook to the Router, which allows you to hook
        in and custom-parse route arguments, like query strings, for example.
      </li>
      <li>
        Performance fine-tuning for Backbone Events.
      </li>
      <li>
        Better matching for Unicode in routes, in old browsers.
      </li>
      <li>
        Backbone Routers now handle query params in route fragments, passing
        them into the handler as the last argument.  Routes specified as
        strings should no longer include the query string
        (<tt>'foo?:query'</tt> should be <tt>'foo'</tt>).
      </li>
    </ul>

    <b class="header">1.1.0</b> — <small><i>Oct. 10, 2013</i></small> — <a href="https://github.com/jashkenas/backbone/compare/1.0.0...1.1.0">Diff</a> — <a href="https://cdn.rawgit.com/jashkenas/backbone/1.1.0/index.html">Docs</a><br>
    <ul style="margin-top: 5px;">
      <li>
        Made the return values of Collection's <tt>set</tt>, <tt>add</tt>,
        <tt>remove</tt>, and <tt>reset</tt> more useful. Instead of returning
        <tt>this</tt>, they now return the changed (added, removed or updated)
        model or list of models.
      </li>
      <li>
        Backbone Views no longer automatically attach options passed to the constructor as
        <tt>this.options</tt> and Backbone Models no longer attach <tt>url</tt> and
        <tt>urlRoot</tt> options, but you can do it yourself if you prefer.
      </li>
      <li>
        All <tt>"invalid"</tt> events now pass consistent arguments. First the
        model in question, then the error object, then options.
      </li>
      <li>
        You are no longer permitted to change the <b>id</b> of your model during
        <tt>parse</tt>. Use <tt>idAttribute</tt> instead.
      </li>
      <li>
        On the other hand, <tt>parse</tt> is now an excellent place to extract
        and vivify incoming nested JSON into associated submodels.
      </li>
      <li>
        Many tweaks, optimizations and bugfixes relating to Backbone 1.0,
        including URL overrides, mutation of options, bulk ordering, trailing
        slashes, edge-case listener leaks, nested model parsing...
      </li>
    </ul>

    <b class="header">1.0.0</b> — <small><i>March 20, 2013</i></small> — <a href="https://github.com/jashkenas/backbone/compare/0.9.10...1.0.0">Diff</a> — <a href="https://cdn.rawgit.com/jashkenas/backbone/1.0.0/index.html">Docs</a><br>
    <ul style="margin-top: 5px;">
      <li>
        Renamed Collection's "update" to <a href="http://backbonejs.org/#Collection-set">set</a>, for
        parallelism with the similar <tt>model.set()</tt>, and contrast with
        <a href="http://backbonejs.org/#Collection-reset">reset</a>. It's now the default
        updating mechanism after a <a href="http://backbonejs.org/#Collection-fetch">fetch</a>. If you'd
        like to continue using "reset", pass <tt>{reset: true}</tt>.
      </li>
      <li>
        Your route handlers will now receive their URL parameters pre-decoded.
      </li>
      <li>
        Added <a href="http://backbonejs.org/#Events-listenToOnce">listenToOnce</a> as the analogue of
        <a href="http://backbonejs.org/#Events-once">once</a>.
      </li>
      <li>
        Added the <a href="http://backbonejs.org/#Collection-findWhere">findWhere</a> method to Collections,
        similar to <a href="http://backbonejs.org/#Collection-where">where</a>.
      </li>
      <li>
        Added the <tt>keys</tt>, <tt>values</tt>, <tt>pairs</tt>, <tt>invert</tt>,
        <tt>pick</tt>, and <tt>omit</tt> Underscore.js methods to Backbone Models.
      </li>
      <li>
        The routes in a Router's route map may now be function literals,
        instead of references to methods, if you like.
      </li>
      <li>
        <tt>url</tt> and <tt>urlRoot</tt> properties may now be passed as options
        when instantiating a new Model.
      </li>
    </ul>

    <b class="header">0.9.10</b> — <small><i>Jan. 15, 2013</i></small> — <a href="https://github.com/jashkenas/backbone/compare/0.9.9...0.9.10">Diff</a> — <a href="https://cdn.rawgit.com/jashkenas/backbone/0.9.10/index.html">Docs</a><br>
    <ul style="margin-top: 5px;">
      <li>
        A <tt>"route"</tt> event is triggered on the router in addition
        to being fired on <tt>Backbone.history</tt>.
      </li>
      <li>
        Model validation is now only enforced by default in
        <tt>Model#save</tt> and no longer enforced by default upon
        construction or in <tt>Model#set</tt>, unless the <tt>{validate:true}</tt>
        option is passed.
      </li>
      <li>
        <tt>View#make</tt> has been removed. You'll need to use <tt>$</tt> directly to
        construct DOM elements now.
      </li>
      <li>
        Passing <tt>{silent:true}</tt> on change will no longer delay individual
        <tt>"change:attr"</tt> events, instead they are silenced entirely.
      </li>
      <li>
        The <tt>Model#change</tt> method has been removed, as delayed attribute
        changes are no longer available.
      </li>
      <li>
        Bug fix on <tt>change</tt> where attribute comparison uses <tt>!==</tt>
        instead of <tt>_.isEqual</tt>.
      </li>
      <li>
        Bug fix where an empty response from the server on save would not call
        the success function.
      </li>
      <li>
        <tt>parse</tt> now receives <tt>options</tt> as its second argument.
      </li>
      <li>
        Model validation now fires <tt>invalid</tt> event instead of
        <tt>error</tt>.
      </li>
    </ul>

    <b class="header">0.9.9</b> — <small><i>Dec. 13, 2012</i></small> — <a href="https://github.com/jashkenas/backbone/compare/0.9.2...0.9.9">Diff</a> — <a href="https://cdn.rawgit.com/jashkenas/backbone/0.9.9/index.html">Docs</a><br>
    <ul style="margin-top: 5px;">
      <li>
        Added <a href="http://backbonejs.org/#Events-listenTo">listenTo</a>
        and <a href="http://backbonejs.org/#Events-stopListening">stopListening</a> to Events. They
        can be used as inversion-of-control flavors of <tt>on</tt> and <tt>off</tt>,
        for convenient unbinding of all events an object is currently listening to.
        <tt>view.remove()</tt> automatically calls <tt>view.stopListening()</tt>.
      </li>
      <li>
        When using <tt>add</tt> on a collection, passing <tt>{merge: true}</tt>
        will now cause duplicate models to have their attributes merged in to
        the existing models, instead of being ignored.
      </li>
      <li>
        Added <a href="http://backbonejs.org/#Collection-update">update</a> (which is also available as
        an option to <tt>fetch</tt>) for "smart" updating of sets of models.
      </li>
      <li>
        HTTP <tt>PATCH</tt> support in <a href="http://backbonejs.org/#Model-save">save</a> by passing
        <tt>{patch: true}</tt>.
      </li>
      <li>
        The <tt>Backbone</tt> object now extends <tt>Events</tt> so that you can
        use it as a global event bus, if you like.
      </li>
      <li>
        Added a <tt>"request"</tt> event to <a href="http://backbonejs.org/#Sync">Backbone.sync</a>,
        which triggers whenever a request begins to be made to the server.
        The natural complement to the <tt>"sync"</tt> event.
      </li>
      <li>
        Router URLs now support optional parts via parentheses, without having
        to use a regex.
      </li>
      <li>
        Backbone events now supports <tt>once</tt>, similar to Node's <tt>once</tt>,
        or jQuery's <tt>one</tt>.
      </li>
      <li>
        Backbone events now support jQuery-style event maps <tt>obj.on({click: action})</tt>.
      </li>
      <li>
        While listening to a <tt>reset</tt> event, the list of previous models
        is now available in <tt>options.previousModels</tt>, for convenience.
      </li>
      <li>
        <a href="http://backbonejs.org/#Model-validate">Validation</a> now occurs even during "silent"
        changes. This change means that the <tt>isValid</tt> method has
        been removed. Failed validations also trigger an error, even if an error
        callback is specified in the options.
      </li>
      <li>
        Consolidated <tt>"sync"</tt> and <tt>"error"</tt> events within
        <a href="http://backbonejs.org/#Sync">Backbone.sync</a>. They are now triggered regardless
        of the existence of <tt>success</tt> or <tt>error</tt> callbacks.
      </li>
      <li>
        For mixed-mode APIs, <tt>Backbone.sync</tt> now accepts
        <tt>emulateHTTP</tt> and <tt>emulateJSON</tt> as inline options.
      </li>
      <li>
        Collections now also proxy Underscore method name aliases (collect,
        inject, foldl, foldr, head, tail, take, and so on...)
      </li>
      <li>
        Removed <tt>getByCid</tt> from Collections. <tt>collection.get</tt> now
        supports lookup by both <tt>id</tt> and <tt>cid</tt>.
      </li>
      <li>
        After fetching a model or a collection, <i>all</i> defined <tt>parse</tt>
        functions will now be run. So fetching a collection and getting back new
        models could cause both the collection to parse the list, and then each model
        to be parsed in turn, if you have both functions defined.
      </li>
      <li>
        Bugfix for normalizing leading and trailing slashes in the Router
        definitions. Their presence (or absence) should not affect behavior.
      </li>
      <li>
        When declaring a View, <tt>options</tt>, <tt>el</tt>, <tt>tagName</tt>,
        <tt>id</tt> and <tt>className</tt> may now be defined as functions, if
        you want their values to be determined at runtime.
      </li>
      <li>
        Added a <tt>Backbone.ajax</tt> hook for more convenient overriding of
        the default use of <tt>$.ajax</tt>. If AJAX is too passé, set it to your
        preferred method for server communication.
      </li>
      <li>
        <tt>Collection#sort</tt> now triggers a <tt>sort</tt> event, instead
        of a <tt>reset</tt> event.
      </li>
      <li>
        Calling <tt>destroy</tt> on a Model will now return <tt>false</tt> if
        the model <tt>isNew</tt>.
      </li>
      <li>
        To set what library Backbone uses for DOM manipulation and Ajax calls,
        use <tt>Backbone.$ = ...</tt> instead of <tt>setDomLibrary</tt>.
      </li>
      <li>
        Removed the <tt>Backbone.wrapError</tt> helper method. Overriding
        <tt>sync</tt> should work better for those particular use cases.
      </li>
      <li>
        To improve the performance of <tt>add</tt>, <tt>options.index</tt>
        will no longer be set in the <tt>add</tt> event callback.
        <tt>collection.indexOf(model)</tt> can be used to retrieve the index
        of a model as necessary.
      </li>
      <li>
        For semantic and cross browser reasons, routes will now ignore search
        parameters.  Routes like <tt>search?query=…&amp;page=3</tt> should become
        <tt>search/…/3</tt>.
      </li>
      <li>
        <tt>Model#set</tt> no longer accepts another model as an argument.  This leads
        to subtle problems and is easily replaced with <tt>model.set(other.attributes)</tt>.
      </li>
    </ul>

    <b class="header">0.9.2</b> — <small><i>March 21, 2012</i></small> — <a href="https://github.com/jashkenas/backbone/compare/0.9.1...0.9.2">Diff</a> — <a href="https://cdn.rawgit.com/jashkenas/backbone/0.9.2/index.html">Docs</a><br>
    <ul style="margin-top: 5px;">
      <li>
        Instead of throwing an error when adding duplicate models to a collection,
        Backbone will now silently skip them instead.
      </li>
      <li>
        Added <a href="http://backbonejs.org/#Collection-push">push</a>,
        <a href="http://backbonejs.org/#Collection-pop">pop</a>,
        <a href="http://backbonejs.org/#Collection-unshift">unshift</a>, and
        <a href="http://backbonejs.org/#Collection-shift">shift</a> to collections.
      </li>
      <li>
        A model's <a href="http://backbonejs.org/#Model-changed">changed</a> hash is now exposed for
        easy reading of the changed attribute delta, since the model's last
        <tt>"change"</tt> event.
      </li>
      <li>
        Added <a href="http://backbonejs.org/#Collection-where">where</a> to collections for simple
        filtering.
      </li>
      <li>
        You can now use a single <a href="http://backbonejs.org/#Events-off">off</a> call
        to remove all callbacks bound to a specific object.
      </li>
      <li>
        Bug fixes for nested individual change events, some of which may be
        "silent".
      </li>
      <li>
        Bug fixes for URL encoding in <tt>location.hash</tt> fragments.
      </li>
      <li>
        Bug fix for client-side validation in advance of a <tt>save</tt> call
        with <tt>{wait: true}</tt>.
      </li>
      <li>
        Updated / refreshed the example
        <a href="http://backbonejs.org/examples/todos/index.html">Todo List</a> app.
      </li>
    </ul>

    <b class="header">0.9.1</b> — <small><i>Feb. 2, 2012</i></small> — <a href="https://github.com/jashkenas/backbone/compare/0.9.0...0.9.1">Diff</a> — <a href="https://cdn.rawgit.com/jashkenas/backbone/0.9.1/index.html">Docs</a><br>
    <ul style="margin-top: 5px;">
      <li>
        Reverted to 0.5.3-esque behavior for validating models. Silent changes
        no longer trigger validation (making it easier to work with forms).
        Added an <tt>isValid</tt> function that you can use to check if a model
        is currently in a valid state.
      </li>
      <li>
        If you have multiple versions of jQuery on the page, you can now tell
        Backbone which one to use with <tt>Backbone.setDomLibrary</tt>.
      </li>
      <li>
        Fixes regressions in <b>0.9.0</b> for routing with "root", saving with
        both "wait" and "validate", and the order of nested "change" events.
      </li>
    </ul>

    <b class="header">0.9.0</b> — <small><i>Jan. 30, 2012</i></small> — <a href="https://github.com/jashkenas/backbone/compare/0.5.3...0.9.0">Diff</a> — <a href="https://cdn.rawgit.com/jashkenas/backbone/0.9.0/index.html">Docs</a><br>
    <ul style="margin-top: 5px;">
      <li>
        Creating and destroying models with <tt>create</tt> and <tt>destroy</tt>
        are now optimistic by default. Pass <tt>{wait: true}</tt> as an option
        if you'd like them to wait for a successful server response to proceed.
      </li>
      <li>
        Two new properties on views: <tt>$el</tt> — a cached jQuery (or Zepto)
        reference to the view's element, and <tt>setElement</tt>, which should
        be used instead of manually setting a view's <tt>el</tt>. It will
        both set <tt>view.el</tt> and <tt>view.$el</tt> correctly, as well as
        re-delegating events on the new DOM element.
      </li>
      <li>
        You can now bind and trigger multiple spaced-delimited events at once.
        For example: <tt>model.on("change:name change:age", ...)</tt>
      </li>
      <li>
        When you don't know the key in advance, you may now call
        <tt>model.set(key, value)</tt> as well as <tt>save</tt>.
      </li>
      <li>
        Multiple models with the same <tt>id</tt> are no longer allowed in a
        single collection.
      </li>
      <li>
        Added a <tt>"sync"</tt> event, which triggers whenever a model's state
        has been successfully synced with the server (create, save, destroy).
      </li>
      <li>
        <tt>bind</tt> and <tt>unbind</tt> have been renamed to <tt>on</tt>
        and <tt>off</tt> for clarity, following jQuery's lead.
        The old names are also still supported.
      </li>
      <li>
        A Backbone collection's <tt>comparator</tt> function may now behave
        either like a <a href="http://underscorejs.org/#sortBy">sortBy</a>
        (pass a function that takes a single argument),
        or like a <a href="https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/sort">sort</a>
        (pass a comparator function that expects two arguments). The comparator
        function is also now bound by default to the collection — so you
        can refer to <tt>this</tt> within it.
      </li>
      <li>
        A view's <tt>events</tt> hash may now also contain direct function
        values as well as the string names of existing view methods.
      </li>
      <li>
        Validation has gotten an overhaul — a model's <tt>validate</tt> function
        will now be run even for silent changes, and you can no longer create
        a model in an initially invalid state.
      </li>
      <li>
        Added <tt>shuffle</tt> and <tt>initial</tt> to collections, proxied
        from Underscore.
      </li>
      <li>
        <tt>Model#urlRoot</tt> may now be defined as a function as well as a
        value.
      </li>
      <li>
        <tt>View#attributes</tt> may now be defined as a function as well as a
        value.
      </li>
      <li>
        Calling <tt>fetch</tt> on a collection will now cause all fetched JSON
        to be run through the collection's model's <tt>parse</tt> function, if
        one is defined.
      </li>
      <li>
        You may now tell a router to <tt>navigate(fragment, {replace: true})</tt>,
        which will either use <tt>history.replaceState</tt> or
        <tt>location.hash.replace</tt>, in order to change the URL without adding
        a history entry.
      </li>
      <li>
        Within a collection's <tt>add</tt> and <tt>remove</tt> events, the index
        of the model being added or removed is now available as <tt>options.index</tt>.
      </li>
      <li>
        Added an <tt>undelegateEvents</tt> to views, allowing you to manually
        remove all configured event delegations.
      </li>
      <li>
        Although you shouldn't be writing your routes with them in any case —
        leading slashes (<tt>/</tt>) are now stripped from routes.
      </li>
      <li>
        Calling <tt>clone</tt> on a model now only passes the attributes
        for duplication, not a reference to the model itself.
      </li>
      <li>
        Calling <tt>clear</tt> on a model now removes the <tt>id</tt> attribute.
      </li>
    </ul>

    <p>
      <b class="header">0.5.3</b> — <small><i>August 9, 2011</i></small> — <a href="https://github.com/jashkenas/backbone/compare/0.5.2...0.5.3">Diff</a> — <a href="https://cdn.rawgit.com/jashkenas/backbone/0.5.3/index.html">Docs</a><br>
      A View's <tt>events</tt> property may now be defined as a function, as well
      as an object literal, making it easier to programmatically define and inherit
      events. <tt>groupBy</tt> is now proxied from Underscore as a method on Collections.
      If the server has already rendered everything on page load, pass
      <tt>Backbone.history.start({silent: true})</tt> to prevent the initial route
      from triggering. Bugfix for pushState with encoded URLs.
    </p>

    <p>
      <b class="header">0.5.2</b> — <small><i>July 26, 2011</i></small> — <a href="https://github.com/jashkenas/backbone/compare/0.5.1...0.5.2">Diff</a> — <a href="https://cdn.rawgit.com/jashkenas/backbone/0.5.2/index.html">Docs</a><br>
      The <tt>bind</tt> function, can now take an optional third argument, to specify
      the <tt>this</tt> of the callback function.
      Multiple models with the same <tt>id</tt> are now allowed in a collection.
      Fixed a bug where calling <tt>.fetch(jQueryOptions)</tt> could cause an
      incorrect URL to be serialized.
      Fixed a brief extra route fire before redirect, when degrading from
      <tt>pushState</tt>.
    </p>

    <p>
      <b class="header">0.5.1</b> — <small><i>July 5, 2011</i></small> — <a href="https://github.com/jashkenas/backbone/compare/0.5.0...0.5.1">Diff</a> — <a href="https://cdn.rawgit.com/jashkenas/backbone/0.5.1/index.html">Docs</a><br>
      Cleanups from the 0.5.0 release, to wit: improved transparent upgrades from
      hash-based URLs to pushState, and vice-versa. Fixed inconsistency with
      non-modified attributes being passed to <tt>Model#initialize</tt>. Reverted
      a <b>0.5.0</b> change that would strip leading hashbangs from routes.
      Added <tt>contains</tt> as an alias for <tt>includes</tt>.
    </p>

    <p>
      <b class="header">0.5.0</b> — <small><i>July 1, 2011</i></small> — <a href="https://github.com/jashkenas/backbone/compare/0.3.3...0.5.0">Diff</a> — <a href="https://cdn.rawgit.com/jashkenas/backbone/0.5.0/index.html">Docs</a><br>
      A large number of tiny tweaks and micro bugfixes, best viewed by looking
      at <a href="https://github.com/jashkenas/backbone/compare/0.3.3...0.5.0">the commit diff</a>.
      HTML5 <tt>pushState</tt> support, enabled by opting-in with:
      <tt>Backbone.history.start({pushState: true})</tt>.
      <tt>Controller</tt> was renamed to <tt>Router</tt>, for clarity.
      <tt>Collection#refresh</tt> was renamed to <tt>Collection#reset</tt> to emphasize
      its ability to both reset the collection with new models, as well as empty
      out the collection when used with no parameters.
      <tt>saveLocation</tt> was replaced with <tt>navigate</tt>.
      RESTful persistence methods (save, fetch, etc.) now return the jQuery deferred
      object for further success/error chaining and general convenience.
      Improved XSS escaping for <tt>Model#escape</tt>.
      Added a <tt>urlRoot</tt> option to allow specifying RESTful urls without
      the use of a collection.
      An error is thrown if <tt>Backbone.history.start</tt> is called multiple times.
      <tt>Collection#create</tt> now validates before initializing the new model.
      <tt>view.el</tt> can now be a jQuery string lookup.
      Backbone Views can now also take an <tt>attributes</tt> parameter.
      <tt>Model#defaults</tt> can now be a function as well as a literal attributes
      object.
    </p>

    <p>
      <b class="header">0.3.3</b> — <small><i>Dec 1, 2010</i></small> — <a href="https://github.com/jashkenas/backbone/compare/0.3.2...0.3.3">Diff</a> — <a href="https://cdn.rawgit.com/jashkenas/backbone/0.3.3/index.html">Docs</a><br>
      Backbone.js now supports <a href="http://zeptojs.com/">Zepto</a>, alongside
      jQuery, as a framework for DOM manipulation and Ajax support.
      Implemented <a href="http://backbonejs.org/#Model-escape">Model#escape</a>, to efficiently handle
      attributes intended for HTML interpolation. When trying to persist a model,
      failed requests will now trigger an <tt>"error"</tt> event. The
      ubiquitous <tt>options</tt> argument is now passed as the final argument
      to all <tt>"change"</tt> events.
    </p>

    <p>
      <b class="header">0.3.2</b> — <small><i>Nov 23, 2010</i></small> — <a href="https://github.com/jashkenas/backbone/compare/0.3.1...0.3.2">Diff</a> — <a href="https://cdn.rawgit.com/jashkenas/backbone/0.3.2/index.html">Docs</a><br>
      Bugfix for IE7 + iframe-based "hashchange" events. <tt>sync</tt> may now be
      overridden on a per-model, or per-collection basis. Fixed recursion error
      when calling <tt>save</tt> with no changed attributes, within a
      <tt>"change"</tt> event.
    </p>

    <p>
      <b class="header">0.3.1</b> — <small><i>Nov 15, 2010</i></small> — <a href="https://github.com/jashkenas/backbone/compare/0.3.0...0.3.1">Diff</a> — <a href="https://cdn.rawgit.com/jashkenas/backbone/0.3.1/index.html">Docs</a><br>
      All <tt>"add"</tt> and <tt>"remove"</tt> events are now sent through the
      model, so that views can listen for them without having to know about the
      collection. Added a <tt>remove</tt> method to <a href="http://backbonejs.org/#View">Backbone.View</a>.
      <tt>toJSON</tt> is no longer called at all for <tt>'read'</tt> and <tt>'delete'</tt> requests.
      Backbone routes are now able to load empty URL fragments.
    </p>

    <p>
      <b class="header">0.3.0</b> — <small><i>Nov 9, 2010</i></small> — <a href="https://github.com/jashkenas/backbone/compare/0.2.0...0.3.0">Diff</a> — <a href="https://cdn.rawgit.com/jashkenas/backbone/0.3.0/index.html">Docs</a><br>
      Backbone now has <a href="http://backbonejs.org/#Controller">Controllers</a> and
      <a href="http://backbonejs.org/#History">History</a>, for doing client-side routing based on
      URL fragments.
      Added <tt>emulateHTTP</tt> to provide support for legacy servers that don't
      do <tt>PUT</tt> and <tt>DELETE</tt>.
      Added <tt>emulateJSON</tt> for servers that can't accept <tt>application/json</tt>
      encoded requests.
      Added <a href="http://backbonejs.org/#Model-clear">Model#clear</a>, which removes all attributes
      from a model.
      All Backbone classes may now be seamlessly inherited by CoffeeScript classes.
    </p>

    <p>
      <b class="header">0.2.0</b> — <small><i>Oct 25, 2010</i></small> — <a href="https://github.com/jashkenas/backbone/compare/0.1.2...0.2.0">Diff</a> — <a href="https://cdn.rawgit.com/jashkenas/backbone/0.2.0/index.html">Docs</a><br>
      Instead of requiring server responses to be namespaced under a <tt>model</tt>
      key, now you can define your own <a href="http://backbonejs.org/#Model-parse">parse</a> method
      to convert responses into attributes for Models and Collections.
      The old <tt>handleEvents</tt> function is now named
      <a href="http://backbonejs.org/#View-delegateEvents">delegateEvents</a>, and is automatically
      called as part of the View's constructor.
      Added a <a href="http://backbonejs.org/#Collection-toJSON">toJSON</a> function to Collections.
      Added <a href="http://backbonejs.org/#Collection-chain">Underscore's chain</a> to Collections.
    </p>

    <p>
      <b class="header">0.1.2</b> — <small><i>Oct 19, 2010</i></small> — <a href="https://github.com/jashkenas/backbone/compare/0.1.1...0.1.2">Diff</a> — <a href="https://cdn.rawgit.com/jashkenas/backbone/0.1.2/index.html">Docs</a><br>
      Added a <a href="http://backbonejs.org/#Model-fetch">Model#fetch</a> method for refreshing the
      attributes of single model from the server.
      An <tt>error</tt> callback may now be passed to <tt>set</tt> and <tt>save</tt>
      as an option, which will be invoked if validation fails, overriding the
      <tt>"error"</tt> event.
      You can now tell backbone to use the <tt>_method</tt> hack instead of HTTP
      methods by setting <tt>Backbone.emulateHTTP = true</tt>.
      Existing Model and Collection data is no longer sent up unnecessarily with
      <tt>GET</tt> and <tt>DELETE</tt> requests. Added a <tt>rake lint</tt> task.
      Backbone is now published as an <a href="http://npmjs.org/">NPM</a> module.
    </p>

    <p>
      <b class="header">0.1.1</b> — <small><i>Oct 14, 2010</i></small> — <a href="https://github.com/jashkenas/backbone/compare/0.1.0...0.1.1">Diff</a> — <a href="https://cdn.rawgit.com/jashkenas/backbone/0.1.1/index.html">Docs</a><br>
      Added a convention for <tt>initialize</tt> functions to be called
      upon instance construction, if defined. Documentation tweaks.
    </p>

    <p>
      <b class="header">0.1.0</b> — <small><i>Oct 13, 2010</i></small> — <a href="https://cdn.rawgit.com/jashkenas/backbone/0.1.0/index.html">Docs</a><br>
      Initial Backbone release.
    </p>

    <p>
      <br>
      <a href="http://documentcloud.org/" title="A DocumentCloud Project" style="background:none;">
        <img src="./Backbone_files/a_documentcloud_project.png" alt="A DocumentCloud Project" style="position:relative;left:-10px;">
      </a>
    </p>

  </div>

  <script src="./Backbone_files/underscore.js.download"></script>
  <script src="./Backbone_files/jquery.js.download"></script>
  <script src="./Backbone_files/jquery.lazyload.js.download"></script>
  <script src="./Backbone_files/json2.js.download"></script>
  <script src="./Backbone_files/backbone.js.download"></script>
  <script src="./Backbone_files/search.js.download"></script>

  <script>
    // Set up the "play" buttons for each runnable code example.
    $(function() {
      $('.runnable').each(function() {
        var code = this;
        var button = '<div class="run" title="Run"></div>';
        $(button).insertBefore(code).bind('click', function(){
          eval($(code).text());
        });
      });
      $('[data-original]').lazyload();
    });
  </script>



</body><div></div></html>