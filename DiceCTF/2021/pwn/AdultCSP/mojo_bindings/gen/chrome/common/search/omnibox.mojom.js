// chrome/common/search/omnibox.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'chrome/common/search/omnibox.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('search.mojom');
  var string16$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/string16.mojom', '../../../mojo/public/mojom/base/string16.mojom.js');
  }
  var url$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/url.mojom', '../../../url/mojom/url.mojom.js');
  }



  function ACMatchClassification(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ACMatchClassification.prototype.initDefaults_ = function() {
    this.offset = 0;
    this.style = 0;
  };
  ACMatchClassification.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ACMatchClassification.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;



    return validator.validationError.NONE;
  };

  ACMatchClassification.encodedSize = codec.kStructHeaderSize + 8;

  ACMatchClassification.decode = function(decoder) {
    var packed;
    var val = new ACMatchClassification();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.offset =
        decoder.decodeStruct(codec.Uint32);
    val.style =
        decoder.decodeStruct(codec.Int32);
    return val;
  };

  ACMatchClassification.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ACMatchClassification.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint32, val.offset);
    encoder.encodeStruct(codec.Int32, val.style);
  };
  function AutocompleteMatch(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AutocompleteMatch.prototype.initDefaults_ = function() {
    this.allowedToBeDefaultMatch = false;
    this.isSearchType = false;
    this.swapContentsAndDescription = false;
    this.supportsDeletion = false;
    this.suggestionGroupId = 0;
    this.contents = null;
    this.contentsClass = null;
    this.description = null;
    this.descriptionClass = null;
    this.destinationUrl = null;
    this.inlineAutocompletion = null;
    this.fillIntoEdit = null;
    this.iconUrl = null;
    this.imageDominantColor = null;
    this.imageUrl = null;
    this.type = null;
  };
  AutocompleteMatch.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AutocompleteMatch.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 104}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;



    // validate AutocompleteMatch.contents
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, string16$.String16, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate AutocompleteMatch.contentsClass
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 16, 8, new codec.PointerTo(ACMatchClassification), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate AutocompleteMatch.description
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, string16$.String16, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate AutocompleteMatch.descriptionClass
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 32, 8, new codec.PointerTo(ACMatchClassification), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate AutocompleteMatch.destinationUrl
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 40, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate AutocompleteMatch.inlineAutocompletion
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 48, string16$.String16, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate AutocompleteMatch.fillIntoEdit
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 56, string16$.String16, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate AutocompleteMatch.iconUrl
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 64, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate AutocompleteMatch.imageDominantColor
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 72, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate AutocompleteMatch.imageUrl
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 80, false)
    if (err !== validator.validationError.NONE)
        return err;



    // validate AutocompleteMatch.type
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 88, false)
    if (err !== validator.validationError.NONE)
        return err;




    return validator.validationError.NONE;
  };

  AutocompleteMatch.encodedSize = codec.kStructHeaderSize + 96;

  AutocompleteMatch.decode = function(decoder) {
    var packed;
    var val = new AutocompleteMatch();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.allowedToBeDefaultMatch = (packed >> 0) & 1 ? true : false;
    val.isSearchType = (packed >> 1) & 1 ? true : false;
    val.swapContentsAndDescription = (packed >> 2) & 1 ? true : false;
    val.supportsDeletion = (packed >> 3) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.suggestionGroupId =
        decoder.decodeStruct(codec.Int32);
    val.contents =
        decoder.decodeStructPointer(string16$.String16);
    val.contentsClass =
        decoder.decodeArrayPointer(new codec.PointerTo(ACMatchClassification));
    val.description =
        decoder.decodeStructPointer(string16$.String16);
    val.descriptionClass =
        decoder.decodeArrayPointer(new codec.PointerTo(ACMatchClassification));
    val.destinationUrl =
        decoder.decodeStructPointer(url$.Url);
    val.inlineAutocompletion =
        decoder.decodeStructPointer(string16$.String16);
    val.fillIntoEdit =
        decoder.decodeStructPointer(string16$.String16);
    val.iconUrl =
        decoder.decodeStruct(codec.String);
    val.imageDominantColor =
        decoder.decodeStruct(codec.String);
    val.imageUrl =
        decoder.decodeStruct(codec.String);
    val.type =
        decoder.decodeStruct(codec.String);
    return val;
  };

  AutocompleteMatch.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AutocompleteMatch.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.allowedToBeDefaultMatch & 1) << 0
    packed |= (val.isSearchType & 1) << 1
    packed |= (val.swapContentsAndDescription & 1) << 2
    packed |= (val.supportsDeletion & 1) << 3
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Int32, val.suggestionGroupId);
    encoder.encodeStructPointer(string16$.String16, val.contents);
    encoder.encodeArrayPointer(new codec.PointerTo(ACMatchClassification), val.contentsClass);
    encoder.encodeStructPointer(string16$.String16, val.description);
    encoder.encodeArrayPointer(new codec.PointerTo(ACMatchClassification), val.descriptionClass);
    encoder.encodeStructPointer(url$.Url, val.destinationUrl);
    encoder.encodeStructPointer(string16$.String16, val.inlineAutocompletion);
    encoder.encodeStructPointer(string16$.String16, val.fillIntoEdit);
    encoder.encodeStruct(codec.String, val.iconUrl);
    encoder.encodeStruct(codec.String, val.imageDominantColor);
    encoder.encodeStruct(codec.String, val.imageUrl);
    encoder.encodeStruct(codec.String, val.type);
  };
  function SuggestionGroup(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SuggestionGroup.prototype.initDefaults_ = function() {
    this.header = null;
    this.hidden = false;
  };
  SuggestionGroup.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SuggestionGroup.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 24}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate SuggestionGroup.header
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, string16$.String16, false);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  SuggestionGroup.encodedSize = codec.kStructHeaderSize + 16;

  SuggestionGroup.decode = function(decoder) {
    var packed;
    var val = new SuggestionGroup();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.header =
        decoder.decodeStructPointer(string16$.String16);
    packed = decoder.readUint8();
    val.hidden = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  SuggestionGroup.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SuggestionGroup.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(string16$.String16, val.header);
    packed = 0;
    packed |= (val.hidden & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function AutocompleteResult(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AutocompleteResult.prototype.initDefaults_ = function() {
    this.input = null;
    this.suggestionGroupsMap = null;
    this.matches = null;
  };
  AutocompleteResult.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AutocompleteResult.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 32}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate AutocompleteResult.input
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, string16$.String16, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate AutocompleteResult.suggestionGroupsMap
    err = messageValidator.validateMapPointer(offset + codec.kStructHeaderSize + 8, false, codec.Int32, new codec.PointerTo(SuggestionGroup), false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate AutocompleteResult.matches
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 16, 8, new codec.PointerTo(AutocompleteMatch), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AutocompleteResult.encodedSize = codec.kStructHeaderSize + 24;

  AutocompleteResult.decode = function(decoder) {
    var packed;
    var val = new AutocompleteResult();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.input =
        decoder.decodeStructPointer(string16$.String16);
    val.suggestionGroupsMap =
        decoder.decodeMapPointer(codec.Int32, new codec.PointerTo(SuggestionGroup));
    val.matches =
        decoder.decodeArrayPointer(new codec.PointerTo(AutocompleteMatch));
    return val;
  };

  AutocompleteResult.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AutocompleteResult.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(string16$.String16, val.input);
    encoder.encodeMapPointer(codec.Int32, new codec.PointerTo(SuggestionGroup), val.suggestionGroupsMap);
    encoder.encodeArrayPointer(new codec.PointerTo(AutocompleteMatch), val.matches);
  };
  exports.ACMatchClassification = ACMatchClassification;
  exports.AutocompleteMatch = AutocompleteMatch;
  exports.SuggestionGroup = SuggestionGroup;
  exports.AutocompleteResult = AutocompleteResult;
})();