// chrome/browser/ui/webui/read_later/read_later.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'chrome/browser/ui/webui/read_later/read_later.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('readLater.mojom');
  var url$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/url.mojom', '../../../../../url/mojom/url.mojom.js');
  }



  function ReadLaterEntriesByStatus(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ReadLaterEntriesByStatus.prototype.initDefaults_ = function() {
    this.unreadEntries = null;
    this.readEntries = null;
  };
  ReadLaterEntriesByStatus.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ReadLaterEntriesByStatus.validate = function(messageValidator, offset) {
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


    // validate ReadLaterEntriesByStatus.unreadEntries
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(ReadLaterEntry), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ReadLaterEntriesByStatus.readEntries
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 8, new codec.PointerTo(ReadLaterEntry), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ReadLaterEntriesByStatus.encodedSize = codec.kStructHeaderSize + 16;

  ReadLaterEntriesByStatus.decode = function(decoder) {
    var packed;
    var val = new ReadLaterEntriesByStatus();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.unreadEntries =
        decoder.decodeArrayPointer(new codec.PointerTo(ReadLaterEntry));
    val.readEntries =
        decoder.decodeArrayPointer(new codec.PointerTo(ReadLaterEntry));
    return val;
  };

  ReadLaterEntriesByStatus.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ReadLaterEntriesByStatus.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(ReadLaterEntry), val.unreadEntries);
    encoder.encodeArrayPointer(new codec.PointerTo(ReadLaterEntry), val.readEntries);
  };
  function ReadLaterEntry(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ReadLaterEntry.prototype.initDefaults_ = function() {
    this.title = null;
    this.url = null;
    this.displayUrl = null;
    this.updateTime = 0;
    this.read = false;
    this.displayTimeSinceUpdate = null;
  };
  ReadLaterEntry.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ReadLaterEntry.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 56}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ReadLaterEntry.title
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate ReadLaterEntry.url
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ReadLaterEntry.displayUrl
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;




    // validate ReadLaterEntry.displayTimeSinceUpdate
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 40, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ReadLaterEntry.encodedSize = codec.kStructHeaderSize + 48;

  ReadLaterEntry.decode = function(decoder) {
    var packed;
    var val = new ReadLaterEntry();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.title =
        decoder.decodeStruct(codec.String);
    val.url =
        decoder.decodeStructPointer(url$.Url);
    val.displayUrl =
        decoder.decodeStruct(codec.String);
    val.updateTime =
        decoder.decodeStruct(codec.Int64);
    packed = decoder.readUint8();
    val.read = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.displayTimeSinceUpdate =
        decoder.decodeStruct(codec.String);
    return val;
  };

  ReadLaterEntry.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ReadLaterEntry.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.title);
    encoder.encodeStructPointer(url$.Url, val.url);
    encoder.encodeStruct(codec.String, val.displayUrl);
    encoder.encodeStruct(codec.Int64, val.updateTime);
    packed = 0;
    packed |= (val.read & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.String, val.displayTimeSinceUpdate);
  };
  function PageHandlerFactory_CreatePageHandler_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PageHandlerFactory_CreatePageHandler_Params.prototype.initDefaults_ = function() {
    this.page = new PagePtr();
    this.handler = new bindings.InterfaceRequest();
  };
  PageHandlerFactory_CreatePageHandler_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PageHandlerFactory_CreatePageHandler_Params.validate = function(messageValidator, offset) {
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


    // validate PageHandlerFactory_CreatePageHandler_Params.page
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 0, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PageHandlerFactory_CreatePageHandler_Params.handler
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PageHandlerFactory_CreatePageHandler_Params.encodedSize = codec.kStructHeaderSize + 16;

  PageHandlerFactory_CreatePageHandler_Params.decode = function(decoder) {
    var packed;
    var val = new PageHandlerFactory_CreatePageHandler_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.page =
        decoder.decodeStruct(new codec.Interface(PagePtr));
    val.handler =
        decoder.decodeStruct(codec.InterfaceRequest);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  PageHandlerFactory_CreatePageHandler_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PageHandlerFactory_CreatePageHandler_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(new codec.Interface(PagePtr), val.page);
    encoder.encodeStruct(codec.InterfaceRequest, val.handler);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function PageHandler_GetReadLaterEntries_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PageHandler_GetReadLaterEntries_Params.prototype.initDefaults_ = function() {
  };
  PageHandler_GetReadLaterEntries_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PageHandler_GetReadLaterEntries_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 8}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PageHandler_GetReadLaterEntries_Params.encodedSize = codec.kStructHeaderSize + 0;

  PageHandler_GetReadLaterEntries_Params.decode = function(decoder) {
    var packed;
    var val = new PageHandler_GetReadLaterEntries_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  PageHandler_GetReadLaterEntries_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PageHandler_GetReadLaterEntries_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function PageHandler_GetReadLaterEntries_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PageHandler_GetReadLaterEntries_ResponseParams.prototype.initDefaults_ = function() {
    this.entries = null;
  };
  PageHandler_GetReadLaterEntries_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PageHandler_GetReadLaterEntries_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate PageHandler_GetReadLaterEntries_ResponseParams.entries
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, ReadLaterEntriesByStatus, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PageHandler_GetReadLaterEntries_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  PageHandler_GetReadLaterEntries_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new PageHandler_GetReadLaterEntries_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.entries =
        decoder.decodeStructPointer(ReadLaterEntriesByStatus);
    return val;
  };

  PageHandler_GetReadLaterEntries_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PageHandler_GetReadLaterEntries_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(ReadLaterEntriesByStatus, val.entries);
  };
  function PageHandler_OpenSavedEntry_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PageHandler_OpenSavedEntry_Params.prototype.initDefaults_ = function() {
    this.url = null;
  };
  PageHandler_OpenSavedEntry_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PageHandler_OpenSavedEntry_Params.validate = function(messageValidator, offset) {
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


    // validate PageHandler_OpenSavedEntry_Params.url
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PageHandler_OpenSavedEntry_Params.encodedSize = codec.kStructHeaderSize + 8;

  PageHandler_OpenSavedEntry_Params.decode = function(decoder) {
    var packed;
    var val = new PageHandler_OpenSavedEntry_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.url =
        decoder.decodeStructPointer(url$.Url);
    return val;
  };

  PageHandler_OpenSavedEntry_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PageHandler_OpenSavedEntry_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(url$.Url, val.url);
  };
  function PageHandler_UpdateReadStatus_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PageHandler_UpdateReadStatus_Params.prototype.initDefaults_ = function() {
    this.url = null;
    this.read = false;
  };
  PageHandler_UpdateReadStatus_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PageHandler_UpdateReadStatus_Params.validate = function(messageValidator, offset) {
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


    // validate PageHandler_UpdateReadStatus_Params.url
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  PageHandler_UpdateReadStatus_Params.encodedSize = codec.kStructHeaderSize + 16;

  PageHandler_UpdateReadStatus_Params.decode = function(decoder) {
    var packed;
    var val = new PageHandler_UpdateReadStatus_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.url =
        decoder.decodeStructPointer(url$.Url);
    packed = decoder.readUint8();
    val.read = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  PageHandler_UpdateReadStatus_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PageHandler_UpdateReadStatus_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(url$.Url, val.url);
    packed = 0;
    packed |= (val.read & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function PageHandler_RemoveEntry_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PageHandler_RemoveEntry_Params.prototype.initDefaults_ = function() {
    this.url = null;
  };
  PageHandler_RemoveEntry_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PageHandler_RemoveEntry_Params.validate = function(messageValidator, offset) {
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


    // validate PageHandler_RemoveEntry_Params.url
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PageHandler_RemoveEntry_Params.encodedSize = codec.kStructHeaderSize + 8;

  PageHandler_RemoveEntry_Params.decode = function(decoder) {
    var packed;
    var val = new PageHandler_RemoveEntry_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.url =
        decoder.decodeStructPointer(url$.Url);
    return val;
  };

  PageHandler_RemoveEntry_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PageHandler_RemoveEntry_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(url$.Url, val.url);
  };
  function PageHandler_ShowUI_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PageHandler_ShowUI_Params.prototype.initDefaults_ = function() {
  };
  PageHandler_ShowUI_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PageHandler_ShowUI_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 8}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PageHandler_ShowUI_Params.encodedSize = codec.kStructHeaderSize + 0;

  PageHandler_ShowUI_Params.decode = function(decoder) {
    var packed;
    var val = new PageHandler_ShowUI_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  PageHandler_ShowUI_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PageHandler_ShowUI_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function PageHandler_CloseUI_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PageHandler_CloseUI_Params.prototype.initDefaults_ = function() {
  };
  PageHandler_CloseUI_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PageHandler_CloseUI_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 8}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PageHandler_CloseUI_Params.encodedSize = codec.kStructHeaderSize + 0;

  PageHandler_CloseUI_Params.decode = function(decoder) {
    var packed;
    var val = new PageHandler_CloseUI_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  PageHandler_CloseUI_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PageHandler_CloseUI_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function Page_ItemsChanged_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Page_ItemsChanged_Params.prototype.initDefaults_ = function() {
    this.entries = null;
  };
  Page_ItemsChanged_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Page_ItemsChanged_Params.validate = function(messageValidator, offset) {
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


    // validate Page_ItemsChanged_Params.entries
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, ReadLaterEntriesByStatus, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Page_ItemsChanged_Params.encodedSize = codec.kStructHeaderSize + 8;

  Page_ItemsChanged_Params.decode = function(decoder) {
    var packed;
    var val = new Page_ItemsChanged_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.entries =
        decoder.decodeStructPointer(ReadLaterEntriesByStatus);
    return val;
  };

  Page_ItemsChanged_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Page_ItemsChanged_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(ReadLaterEntriesByStatus, val.entries);
  };
  var kPageHandlerFactory_CreatePageHandler_Name = 1132002582;

  function PageHandlerFactoryPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(PageHandlerFactory,
                                                   handleOrPtrInfo);
  }

  function PageHandlerFactoryAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        PageHandlerFactory, associatedInterfacePtrInfo);
  }

  PageHandlerFactoryAssociatedPtr.prototype =
      Object.create(PageHandlerFactoryPtr.prototype);
  PageHandlerFactoryAssociatedPtr.prototype.constructor =
      PageHandlerFactoryAssociatedPtr;

  function PageHandlerFactoryProxy(receiver) {
    this.receiver_ = receiver;
  }
  PageHandlerFactoryPtr.prototype.createPageHandler = function() {
    return PageHandlerFactoryProxy.prototype.createPageHandler
        .apply(this.ptr.getProxy(), arguments);
  };

  PageHandlerFactoryProxy.prototype.createPageHandler = function(page, handler) {
    var params_ = new PageHandlerFactory_CreatePageHandler_Params();
    params_.page = page;
    params_.handler = handler;
    var builder = new codec.MessageV0Builder(
        kPageHandlerFactory_CreatePageHandler_Name,
        codec.align(PageHandlerFactory_CreatePageHandler_Params.encodedSize));
    builder.encodeStruct(PageHandlerFactory_CreatePageHandler_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function PageHandlerFactoryStub(delegate) {
    this.delegate_ = delegate;
  }
  PageHandlerFactoryStub.prototype.createPageHandler = function(page, handler) {
    return this.delegate_ && this.delegate_.createPageHandler && this.delegate_.createPageHandler(page, handler);
  }

  PageHandlerFactoryStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kPageHandlerFactory_CreatePageHandler_Name:
      var params = reader.decodeStruct(PageHandlerFactory_CreatePageHandler_Params);
      this.createPageHandler(params.page, params.handler);
      return true;
    default:
      return false;
    }
  };

  PageHandlerFactoryStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validatePageHandlerFactoryRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kPageHandlerFactory_CreatePageHandler_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = PageHandlerFactory_CreatePageHandler_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validatePageHandlerFactoryResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var PageHandlerFactory = {
    name: 'read_later.mojom.PageHandlerFactory',
    kVersion: 0,
    ptrClass: PageHandlerFactoryPtr,
    proxyClass: PageHandlerFactoryProxy,
    stubClass: PageHandlerFactoryStub,
    validateRequest: validatePageHandlerFactoryRequest,
    validateResponse: null,
  };
  PageHandlerFactoryStub.prototype.validator = validatePageHandlerFactoryRequest;
  PageHandlerFactoryProxy.prototype.validator = null;
  var kPageHandler_GetReadLaterEntries_Name = 312560942;
  var kPageHandler_OpenSavedEntry_Name = 478220731;
  var kPageHandler_UpdateReadStatus_Name = 1485419925;
  var kPageHandler_RemoveEntry_Name = 529112159;
  var kPageHandler_ShowUI_Name = 1734526482;
  var kPageHandler_CloseUI_Name = 1940229657;

  function PageHandlerPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(PageHandler,
                                                   handleOrPtrInfo);
  }

  function PageHandlerAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        PageHandler, associatedInterfacePtrInfo);
  }

  PageHandlerAssociatedPtr.prototype =
      Object.create(PageHandlerPtr.prototype);
  PageHandlerAssociatedPtr.prototype.constructor =
      PageHandlerAssociatedPtr;

  function PageHandlerProxy(receiver) {
    this.receiver_ = receiver;
  }
  PageHandlerPtr.prototype.getReadLaterEntries = function() {
    return PageHandlerProxy.prototype.getReadLaterEntries
        .apply(this.ptr.getProxy(), arguments);
  };

  PageHandlerProxy.prototype.getReadLaterEntries = function() {
    var params_ = new PageHandler_GetReadLaterEntries_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kPageHandler_GetReadLaterEntries_Name,
          codec.align(PageHandler_GetReadLaterEntries_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(PageHandler_GetReadLaterEntries_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(PageHandler_GetReadLaterEntries_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  PageHandlerPtr.prototype.openSavedEntry = function() {
    return PageHandlerProxy.prototype.openSavedEntry
        .apply(this.ptr.getProxy(), arguments);
  };

  PageHandlerProxy.prototype.openSavedEntry = function(url) {
    var params_ = new PageHandler_OpenSavedEntry_Params();
    params_.url = url;
    var builder = new codec.MessageV0Builder(
        kPageHandler_OpenSavedEntry_Name,
        codec.align(PageHandler_OpenSavedEntry_Params.encodedSize));
    builder.encodeStruct(PageHandler_OpenSavedEntry_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  PageHandlerPtr.prototype.updateReadStatus = function() {
    return PageHandlerProxy.prototype.updateReadStatus
        .apply(this.ptr.getProxy(), arguments);
  };

  PageHandlerProxy.prototype.updateReadStatus = function(url, read) {
    var params_ = new PageHandler_UpdateReadStatus_Params();
    params_.url = url;
    params_.read = read;
    var builder = new codec.MessageV0Builder(
        kPageHandler_UpdateReadStatus_Name,
        codec.align(PageHandler_UpdateReadStatus_Params.encodedSize));
    builder.encodeStruct(PageHandler_UpdateReadStatus_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  PageHandlerPtr.prototype.removeEntry = function() {
    return PageHandlerProxy.prototype.removeEntry
        .apply(this.ptr.getProxy(), arguments);
  };

  PageHandlerProxy.prototype.removeEntry = function(url) {
    var params_ = new PageHandler_RemoveEntry_Params();
    params_.url = url;
    var builder = new codec.MessageV0Builder(
        kPageHandler_RemoveEntry_Name,
        codec.align(PageHandler_RemoveEntry_Params.encodedSize));
    builder.encodeStruct(PageHandler_RemoveEntry_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  PageHandlerPtr.prototype.showUI = function() {
    return PageHandlerProxy.prototype.showUI
        .apply(this.ptr.getProxy(), arguments);
  };

  PageHandlerProxy.prototype.showUI = function() {
    var params_ = new PageHandler_ShowUI_Params();
    var builder = new codec.MessageV0Builder(
        kPageHandler_ShowUI_Name,
        codec.align(PageHandler_ShowUI_Params.encodedSize));
    builder.encodeStruct(PageHandler_ShowUI_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  PageHandlerPtr.prototype.closeUI = function() {
    return PageHandlerProxy.prototype.closeUI
        .apply(this.ptr.getProxy(), arguments);
  };

  PageHandlerProxy.prototype.closeUI = function() {
    var params_ = new PageHandler_CloseUI_Params();
    var builder = new codec.MessageV0Builder(
        kPageHandler_CloseUI_Name,
        codec.align(PageHandler_CloseUI_Params.encodedSize));
    builder.encodeStruct(PageHandler_CloseUI_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function PageHandlerStub(delegate) {
    this.delegate_ = delegate;
  }
  PageHandlerStub.prototype.getReadLaterEntries = function() {
    return this.delegate_ && this.delegate_.getReadLaterEntries && this.delegate_.getReadLaterEntries();
  }
  PageHandlerStub.prototype.openSavedEntry = function(url) {
    return this.delegate_ && this.delegate_.openSavedEntry && this.delegate_.openSavedEntry(url);
  }
  PageHandlerStub.prototype.updateReadStatus = function(url, read) {
    return this.delegate_ && this.delegate_.updateReadStatus && this.delegate_.updateReadStatus(url, read);
  }
  PageHandlerStub.prototype.removeEntry = function(url) {
    return this.delegate_ && this.delegate_.removeEntry && this.delegate_.removeEntry(url);
  }
  PageHandlerStub.prototype.showUI = function() {
    return this.delegate_ && this.delegate_.showUI && this.delegate_.showUI();
  }
  PageHandlerStub.prototype.closeUI = function() {
    return this.delegate_ && this.delegate_.closeUI && this.delegate_.closeUI();
  }

  PageHandlerStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kPageHandler_OpenSavedEntry_Name:
      var params = reader.decodeStruct(PageHandler_OpenSavedEntry_Params);
      this.openSavedEntry(params.url);
      return true;
    case kPageHandler_UpdateReadStatus_Name:
      var params = reader.decodeStruct(PageHandler_UpdateReadStatus_Params);
      this.updateReadStatus(params.url, params.read);
      return true;
    case kPageHandler_RemoveEntry_Name:
      var params = reader.decodeStruct(PageHandler_RemoveEntry_Params);
      this.removeEntry(params.url);
      return true;
    case kPageHandler_ShowUI_Name:
      var params = reader.decodeStruct(PageHandler_ShowUI_Params);
      this.showUI();
      return true;
    case kPageHandler_CloseUI_Name:
      var params = reader.decodeStruct(PageHandler_CloseUI_Params);
      this.closeUI();
      return true;
    default:
      return false;
    }
  };

  PageHandlerStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kPageHandler_GetReadLaterEntries_Name:
      var params = reader.decodeStruct(PageHandler_GetReadLaterEntries_Params);
      this.getReadLaterEntries().then(function(response) {
        var responseParams =
            new PageHandler_GetReadLaterEntries_ResponseParams();
        responseParams.entries = response.entries;
        var builder = new codec.MessageV1Builder(
            kPageHandler_GetReadLaterEntries_Name,
            codec.align(PageHandler_GetReadLaterEntries_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(PageHandler_GetReadLaterEntries_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validatePageHandlerRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kPageHandler_GetReadLaterEntries_Name:
        if (message.expectsResponse())
          paramsClass = PageHandler_GetReadLaterEntries_Params;
      break;
      case kPageHandler_OpenSavedEntry_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = PageHandler_OpenSavedEntry_Params;
      break;
      case kPageHandler_UpdateReadStatus_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = PageHandler_UpdateReadStatus_Params;
      break;
      case kPageHandler_RemoveEntry_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = PageHandler_RemoveEntry_Params;
      break;
      case kPageHandler_ShowUI_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = PageHandler_ShowUI_Params;
      break;
      case kPageHandler_CloseUI_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = PageHandler_CloseUI_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validatePageHandlerResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kPageHandler_GetReadLaterEntries_Name:
        if (message.isResponse())
          paramsClass = PageHandler_GetReadLaterEntries_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var PageHandler = {
    name: 'read_later.mojom.PageHandler',
    kVersion: 0,
    ptrClass: PageHandlerPtr,
    proxyClass: PageHandlerProxy,
    stubClass: PageHandlerStub,
    validateRequest: validatePageHandlerRequest,
    validateResponse: validatePageHandlerResponse,
  };
  PageHandlerStub.prototype.validator = validatePageHandlerRequest;
  PageHandlerProxy.prototype.validator = validatePageHandlerResponse;
  var kPage_ItemsChanged_Name = 1917401232;

  function PagePtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(Page,
                                                   handleOrPtrInfo);
  }

  function PageAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        Page, associatedInterfacePtrInfo);
  }

  PageAssociatedPtr.prototype =
      Object.create(PagePtr.prototype);
  PageAssociatedPtr.prototype.constructor =
      PageAssociatedPtr;

  function PageProxy(receiver) {
    this.receiver_ = receiver;
  }
  PagePtr.prototype.itemsChanged = function() {
    return PageProxy.prototype.itemsChanged
        .apply(this.ptr.getProxy(), arguments);
  };

  PageProxy.prototype.itemsChanged = function(entries) {
    var params_ = new Page_ItemsChanged_Params();
    params_.entries = entries;
    var builder = new codec.MessageV0Builder(
        kPage_ItemsChanged_Name,
        codec.align(Page_ItemsChanged_Params.encodedSize));
    builder.encodeStruct(Page_ItemsChanged_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function PageStub(delegate) {
    this.delegate_ = delegate;
  }
  PageStub.prototype.itemsChanged = function(entries) {
    return this.delegate_ && this.delegate_.itemsChanged && this.delegate_.itemsChanged(entries);
  }

  PageStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kPage_ItemsChanged_Name:
      var params = reader.decodeStruct(Page_ItemsChanged_Params);
      this.itemsChanged(params.entries);
      return true;
    default:
      return false;
    }
  };

  PageStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validatePageRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kPage_ItemsChanged_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = Page_ItemsChanged_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validatePageResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var Page = {
    name: 'read_later.mojom.Page',
    kVersion: 0,
    ptrClass: PagePtr,
    proxyClass: PageProxy,
    stubClass: PageStub,
    validateRequest: validatePageRequest,
    validateResponse: null,
  };
  PageStub.prototype.validator = validatePageRequest;
  PageProxy.prototype.validator = null;
  exports.ReadLaterEntriesByStatus = ReadLaterEntriesByStatus;
  exports.ReadLaterEntry = ReadLaterEntry;
  exports.PageHandlerFactory = PageHandlerFactory;
  exports.PageHandlerFactoryPtr = PageHandlerFactoryPtr;
  exports.PageHandlerFactoryAssociatedPtr = PageHandlerFactoryAssociatedPtr;
  exports.PageHandler = PageHandler;
  exports.PageHandlerPtr = PageHandlerPtr;
  exports.PageHandlerAssociatedPtr = PageHandlerAssociatedPtr;
  exports.Page = Page;
  exports.PagePtr = PagePtr;
  exports.PageAssociatedPtr = PageAssociatedPtr;
})();