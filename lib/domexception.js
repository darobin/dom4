/*jshint es5:true */

var errorTable = {
    IndexSizeError:             { msg: "The index is not in the allowed range", code: 1 }
,   HierarchyRequestError:      { msg: "The operation would yield an incorrect node tree", code: 3 }
,   WrongDocumentError:         { msg: "The object is in the wrong document", code: 4 }
,   InvalidCharacterError:      { msg: "The string contains invalid characters", code: 5 }
,   NoModificationAllowedError: { msg: "The object can not be modified", code: 7 }
,   NotFoundError:              { msg: "The object can not be found here", code: 8 }
,   NotSupportedError:          { msg: "The operation is not supported", code: 9 }
,   InvalidStateError:          { msg: "The object is in an invalid state", code: 11 }
,   SyntaxError:                { msg: "The string did not match the expected pattern", code: 12 }
,   InvalidModificationError:   { msg: "The object can not be modified in this way", code: 13 }
,   NamespaceError:             { msg: "The operation is not allowed by Namespaces in XML.", code:14 }
,   InvalidAccessError:         { msg: "The object does not support the operation or argument", code: 15 }
,   SecurityError:              { msg: "The operation is insecure", code: 18 }
,   NetworkError:               { msg: "A network error occurred", code: 19 }
,   AbortError:                 { msg: "The operation was aborted", code: 20 }
,   URLMismatchError:           { msg: "The given URL does not match another URL", code: 21 }
,   QuotaExceededError:         { msg: "The quota has been exceeded", code: 22 }
,   TimeoutError:               { msg: "The operation timed out", code: 23 }
,   InvalidNodeTypeError:       { msg: "The supplied node is incorrect or has an incorrect ancestor for this operation", code: 24 }
,   DataCloneError:             { msg: "The object can not be cloned", code: 25 }
,   EncodingError:              { msg: "The encoding operation (either encoded or decoding } failed.", code: 0 }
};


function DOMException (code, name, message) {
    this._code = code;
    this._name = name;
    this._message = message;
}
DOMException.prototype = {
    INDEX_SIZE_ERR:                 1
,   DOMSTRING_SIZE_ERR:             2
,   HIERARCHY_REQUEST_ERR:          3
,   WRONG_DOCUMENT_ERR:             4
,   INVALID_CHARACTER_ERR:          5
,   NO_DATA_ALLOWED_ERR:            6
,   NO_MODIFICATION_ALLOWED_ERR:    7
,   NOT_FOUND_ERR:                  8
,   NOT_SUPPORTED_ERR:              9
,   INUSE_ATTRIBUTE_ERR:            10
,   INVALID_STATE_ERR:              11
,   SYNTAX_ERR:                     12
,   INVALID_MODIFICATION_ERR:       13
,   NAMESPACE_ERR:                  14
,   INVALID_ACCESS_ERR:             15
,   VALIDATION_ERR:                 16
,   TYPE_MISMATCH_ERR:              17
,   SECURITY_ERR:                   18
,   NETWORK_ERR:                    19
,   ABORT_ERR:                      20
,   URL_MISMATCH_ERR:               21
,   QUOTA_EXCEEDED_ERR:             22
,   TIMEOUT_ERR:                    23
,   INVALID_NODE_TYPE_ERR:          24
,   DATA_CLONE_ERR:                 25
,   get code () { return this._code; }
,   get name () { return this._name; }
,   get message () { return this._message; }
};
DOMException.throw = function (name) {
    if (errorTable[name]) {
        throw new DOMException(errorTable[name].code || 0, name, errorTable[name].message);
    }
    else {
        throw new DOMException();
    }
};

exports = DOMException;
