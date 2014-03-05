
var DOMException = require("./domexception")
,   util = require("util")
;

function NonElementParentNode () {
    this._idMap = {};
}
NonElementParentNode.prototype = {
    getElementById: function (id) {
        if (!this._idMap || !this._idMap[id]) return null;
        return this._idMap[id][0];
    }
    // These two are called whenever an element is added or removed, or its .id changes
,   _addToIDMap:    function (id, el) {
        if (!this._idMap[id]) this._idMap[id] = [el];
        else {
            // XXX we don't just append, we have to compare positions
            this._idMap[id].push(el);
        }
    }
,   _removeFromIDMap:   function (id, el) {
        if (!this._idMap[id]) return;
        var idx = this._idMap[id].indexOf(el);
        if (idx < 0) return;
        this._idMap[id].splice(idx, 1);
    }
};


function ParentNode () {}
ParentNode.prototype = {
    
};



function Document () {
    NonElementParentNode.call(this);
    ParentNode.call(this);
}
Document.prototype = {
};
util.inherits(Document, NonElementParentNode);
util.inherits(Document, ParentNode);




function DocumentFragment () {
    NonElementParentNode.call(this);
    ParentNode.call(this);
}
DocumentFragment.prototype = {
};
util.inherits(DocumentFragment, NonElementParentNode);
util.inherits(DocumentFragment, ParentNode);




function Element () {
    ParentNode.call(this);
}
Element.prototype = {
};
util.inherits(Element, ParentNode);



// expose them all
exports.Document = Document;
exports.DocumentFragment = DocumentFragment;
exports.Element = Element;
