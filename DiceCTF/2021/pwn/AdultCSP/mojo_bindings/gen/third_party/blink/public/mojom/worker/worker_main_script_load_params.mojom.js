// third_party/blink/public/mojom/worker/worker_main_script_load_params.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/worker/worker_main_script_load_params.mojom';
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
  var url_response_head$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/url_response_head.mojom', '../../../../../services/network/public/mojom/url_response_head.mojom.js');
  }
  var url_loader$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/url_loader.mojom', '../../../../../services/network/public/mojom/url_loader.mojom.js');
  }



  function WorkerMainScriptLoadParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  WorkerMainScriptLoadParams.prototype.initDefaults_ = function() {
    this.responseHead = null;
    this.responseBody = null;
    this.urlLoaderClientEndpoints = null;
    this.redirectInfos = null;
    this.redirectResponseHeads = null;
  };
  WorkerMainScriptLoadParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  WorkerMainScriptLoadParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 48}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate WorkerMainScriptLoadParams.responseHead
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, url_response_head$.URLResponseHead, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate WorkerMainScriptLoadParams.responseBody
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate WorkerMainScriptLoadParams.urlLoaderClientEndpoints
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, url_loader$.URLLoaderClientEndpoints, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate WorkerMainScriptLoadParams.redirectInfos
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 24, 8, new codec.PointerTo(url_loader$.URLRequestRedirectInfo), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate WorkerMainScriptLoadParams.redirectResponseHeads
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 32, 8, new codec.PointerTo(url_response_head$.URLResponseHead), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  WorkerMainScriptLoadParams.encodedSize = codec.kStructHeaderSize + 40;

  WorkerMainScriptLoadParams.decode = function(decoder) {
    var packed;
    var val = new WorkerMainScriptLoadParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.responseHead =
        decoder.decodeStructPointer(url_response_head$.URLResponseHead);
    val.responseBody =
        decoder.decodeStruct(codec.Handle);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.urlLoaderClientEndpoints =
        decoder.decodeStructPointer(url_loader$.URLLoaderClientEndpoints);
    val.redirectInfos =
        decoder.decodeArrayPointer(new codec.PointerTo(url_loader$.URLRequestRedirectInfo));
    val.redirectResponseHeads =
        decoder.decodeArrayPointer(new codec.PointerTo(url_response_head$.URLResponseHead));
    return val;
  };

  WorkerMainScriptLoadParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(WorkerMainScriptLoadParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(url_response_head$.URLResponseHead, val.responseHead);
    encoder.encodeStruct(codec.Handle, val.responseBody);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(url_loader$.URLLoaderClientEndpoints, val.urlLoaderClientEndpoints);
    encoder.encodeArrayPointer(new codec.PointerTo(url_loader$.URLRequestRedirectInfo), val.redirectInfos);
    encoder.encodeArrayPointer(new codec.PointerTo(url_response_head$.URLResponseHead), val.redirectResponseHeads);
  };
  exports.WorkerMainScriptLoadParams = WorkerMainScriptLoadParams;
})();