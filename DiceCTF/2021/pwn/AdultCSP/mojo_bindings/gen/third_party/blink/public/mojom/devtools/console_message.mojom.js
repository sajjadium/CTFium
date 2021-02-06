// third_party/blink/public/mojom/devtools/console_message.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/devtools/console_message.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('blink.mojom');


  var ConsoleMessageLevel = {};
  ConsoleMessageLevel.kVerbose = 0;
  ConsoleMessageLevel.kInfo = 1;
  ConsoleMessageLevel.kWarning = 2;
  ConsoleMessageLevel.kError = 3;
  ConsoleMessageLevel.MIN_VALUE = 0,
  ConsoleMessageLevel.MAX_VALUE = 3,

  ConsoleMessageLevel.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
      return true;
    }
    return false;
  };

  ConsoleMessageLevel.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var ConsoleMessageSource = {};
  ConsoleMessageSource.kXml = 0;
  ConsoleMessageSource.kJavaScript = 1;
  ConsoleMessageSource.kNetwork = 2;
  ConsoleMessageSource.kConsoleApi = 3;
  ConsoleMessageSource.kStorage = 4;
  ConsoleMessageSource.kAppCache = 5;
  ConsoleMessageSource.kRendering = 6;
  ConsoleMessageSource.kSecurity = 7;
  ConsoleMessageSource.kOther = 8;
  ConsoleMessageSource.kDeprecation = 9;
  ConsoleMessageSource.kWorker = 10;
  ConsoleMessageSource.kViolation = 11;
  ConsoleMessageSource.kIntervention = 12;
  ConsoleMessageSource.kRecommendation = 13;
  ConsoleMessageSource.MIN_VALUE = 0,
  ConsoleMessageSource.MAX_VALUE = 13,

  ConsoleMessageSource.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
      return true;
    }
    return false;
  };

  ConsoleMessageSource.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  exports.ConsoleMessageLevel = ConsoleMessageLevel;
  exports.ConsoleMessageSource = ConsoleMessageSource;
})();