(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n){var r=e.data,o=e.handleLikeClick,i=e.handleCardClick,u=e.handleDeleteClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._id=r._id,this._ownerId=r.owner._id,this._name=r.name,this._src=r.link,this._likes=r.likes,this._cardSelector=n,this._handleLikeClick=o,this._handleCardClick=i,this._handleDeleteClick=u,this._removeCard=this._removeCard.bind(this),this._updateLikes=this._updateLikes.bind(this),this._toggleLike=this._toggleLike.bind(this),this._element=null,this._titleEl=null,this._pictureEl=null,this._likeBtnEl=null,this._likeCountEl=null,this._deleteBtnEl=null}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".place").cloneNode(!0)}},{key:"_getElements",value:function(e){this._titleEl=e.querySelector(".place__title"),this._pictureEl=e.querySelector(".place__picture"),this._likeBtnEl=e.querySelector(".place__like-button"),this._likeCountEl=e.querySelector(".place__like-count"),this._deleteBtnEl=e.querySelector(".place__delete-button")}},{key:"_toggleLike",value:function(){this._likeBtnEl.classList.toggle("place__like-button_liked")}},{key:"_updateLikes",value:function(e){this._likes=e,this._likeCountEl.textContent=this._likes.length}},{key:"_removeCard",value:function(){this._element.remove(),this._element=null}},{key:"_setEventListeners",value:function(){var e=this;this._likeBtnEl.addEventListener("click",(function(){return e._handleLikeClick(e._id,e._likes,e._updateLikes,e._toggleLike)})),this._deleteBtnEl.addEventListener("click",(function(){return e._handleDeleteClick(e._id,e._removeCard)})),this._pictureEl.addEventListener("click",(function(){return e._handleCardClick(e._name,e._src)}))}},{key:"generateCard",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return this._element=this._getTemplate(),this._getElements(this._element),this._titleEl.textContent=this._name,this._pictureEl.src=this._src,this._pictureEl.alt=this._name,this._likeCountEl.textContent=this._likes.length,e!==this._ownerId&&this._deleteBtnEl.remove(),this._likes.map((function(e){return e._id})).includes(e)&&this._toggleLike(),this._setEventListeners(),this._element}}])&&e(n.prototype,r),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._closeBtn=this._popup.querySelector(".pop-up__close-button"),this._handleEscClose=this._handleEscClose.bind(this),this._handleBtnClose=this._handleBtnClose.bind(this),this._handleOverlayClose=this._handleOverlayClose.bind(this)}var t,r;return t=e,(r=[{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_handleBtnClose",value:function(e){e.target===e.currentTarget&&this.close()}},{key:"_handleOverlayClose",value:function(e){e.target.classList.contains("pop-up")&&this.close()}},{key:"setEventListeners",value:function(){this._closeBtn.addEventListener("click",this._handleBtnClose),this._popup.addEventListener("click",this._handleOverlayClose)}},{key:"open",value:function(){document.addEventListener("keydown",this._handleEscClose),this._popup.classList.add("pop-up_opened")}},{key:"close",value:function(){this._popup.classList.remove("pop-up_opened"),document.removeEventListener("keydown",this._handleEscClose)}}])&&n(t.prototype,r),e}();function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t,n){return(u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=l(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var s=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}(f,e);var t,n,r,o,s=(r=f,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=l(r);if(o){var n=l(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return c(this,e)});function f(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),(t=s.call(this,e))._pictureEl=t._popup.querySelector(".image-view__image"),t._titleEl=t._popup.querySelector(".image-view__caption"),t}return t=f,(n=[{key:"open",value:function(e,t){this._pictureEl.src=t,this._pictureEl.alt=e,this._titleEl.textContent=e,u(l(f.prototype),"open",this).call(this)}}])&&i(t.prototype,n),f}(r);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(e,t,n){return(_="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=v(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=v(r);if(o){var n=v(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return y(this,e)});function u(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};return h(this,u),(t=i.call(this,e))._button=t._popup.querySelector(".pop-up__submit"),t._confirmationHandler=n,t}return t=u,(n=[{key:"setEventListeners",value:function(){_(v(u.prototype),"setEventListeners",this).call(this),this._button.addEventListener("click",this._confirmationHandler)}},{key:"changeHandler",value:function(e){this._button.removeEventListener("click",this._confirmationHandler),this._confirmationHandler=e,this._button.addEventListener("click",this._confirmationHandler)}}])&&p(t.prototype,n),u}(r);function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function k(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,t,n){return(g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=L(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function C(e,t){return(C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function S(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?w(e):t}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function L(e){return(L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=L(r);if(o){var n=L(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return S(this,e)});function u(e,t){var n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){};return k(this,u),(n=i.call(this,e))._formEl=n._popup.querySelector(".pop-up__form"),n._inputList=n._formEl.querySelectorAll(".pop-up__text-input"),n._submitBtn=n._formEl.querySelector(".pop-up__submit"),n._submitBtnText=n._submitBtn.textContent,n._handleFormSubmit=t,n._handleInitialValue=r,n._handleSubmit=n._handleSubmit.bind(w(n)),n._restoreBtnText=n._restoreBtnText.bind(w(n)),n}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){return e._formValues[t.name]=t.value})),this._formValues}},{key:"_restoreBtnText",value:function(){this._submitBtn.textContent=this._submitBtnText}},{key:"_handleSubmit",value:function(e){e.preventDefault(),this._submitBtn.textContent="Сохранение...",this._handleFormSubmit(this._getInputValues(),this._restoreBtnText)}},{key:"setEventListeners",value:function(){g(L(u.prototype),"setEventListeners",this).call(this),this._formEl.addEventListener("submit",this._handleSubmit)}},{key:"open",value:function(){this._handleInitialValue(),g(L(u.prototype),"open",this).call(this)}},{key:"close",value:function(){this._formEl.reset(),g(L(u.prototype),"close",this).call(this)}}])&&E(t.prototype,n),u}(r);function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var B=function(){function e(t){var n=t.nameSelector,r=t.bioSelector,o=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameEl=document.querySelector(n),this._aboutEl=document.querySelector(r),this._avatarEl=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._nameEl.textContent,about:this._aboutEl.textContent}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about;this._nameEl.textContent=t,this._aboutEl.textContent=n}},{key:"getAvatarSrc",value:function(){return this._avatarEl.src}},{key:"setAvatarSrc",value:function(e){this._avatarEl.src=e}}])&&j(t.prototype,n),e}();function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var x=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._container=document.querySelector(n),this._items=r,this._renderer=o}var t,n;return t=e,(n=[{key:"items",set:function(e){this._items=e}},{key:"addItem",value:function(e){this._container.append(e)}},{key:"addItemAsFirst",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(){var e=this;this._items.forEach((function(t){return e._renderer(t)}))}}])&&P(t.prototype,n),e}();function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function I(e){return e.ok?e.json():Promise.reject("Возникла ошибка :(")}var T=function(){function e(t){var n=t.url,r=t.token;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=n,this._headers={"Content-Type":"application/json",Authorization:r}}var t,n;return t=e,(n=[{key:"getUser",value:function(){return fetch("".concat(this._url,"users/me"),{headers:this._headers}).then(I)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"cards"),{headers:this._headers}).then(I)}},{key:"editUser",value:function(e){return fetch("".concat(this._url,"users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then(I)}},{key:"addCard",value:function(e){return fetch("".concat(this._url,"cards"),{method:"POST",headers:this._headers,body:JSON.stringify(e)}).then(I)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"cards/").concat(e),{method:"DELETE",headers:this._headers}).then(I)}},{key:"likeCard",value:function(e){return fetch("".concat(this._url,"cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then(I)}},{key:"unlikeCard",value:function(e){return fetch("".concat(this._url,"cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then(I)}},{key:"changeAvatar",value:function(e){return fetch("".concat(this._url,"users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then(I)}}])&&q(t.prototype,n),e}();function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var A=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formElement=n,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e,t){var n=this._formElement.querySelector("#".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),n.textContent=t,n.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector("#".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"_toggleButtonState",value:function(e,t){this._hasInvalidInput(e)?(t.classList.add(this._inactiveButtonClass),t.setAttribute("disabled",!0)):(t.classList.remove(this._inactiveButtonClass),t.removeAttribute("disabled"))}},{key:"_hasInvalidInput",value:function(e){return e.some((function(e){return!e.validity.valid}))}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_setEventListeners",value:function(e){var t=this,n=Array.from(e.querySelectorAll(this._inputSelector)),r=e.querySelector(this._submitButtonSelector);this._toggleButtonState(n,r),n.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t._toggleButtonState(n,r)}))}))}},{key:"enableValidation",value:function(){this._formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners(this._formElement)}}])&&R(t.prototype,n),e}();function D(e,n){return new t({data:e,handleLikeClick:function(e,t,r,o){t.map((function(e){return e._id})).includes(n)?$.unlikeCard(e).then((function(e){r(e.likes),o()})).catch((function(e){return console.log(e+" Не удалось снять лайк.")})):$.likeCard(e).then((function(e){r(e.likes),o()})).catch((function(e){return console.log(e+" Не удалось поставить лайк.")}))},handleCardClick:function(e,t){G.open(e,t)},handleDeleteClick:function(e,t){K.changeHandler((function(){$.deleteCard(e).then((function(){t(),K.close()})).catch((function(e){return console.log(e+" Не удалось удалить карточку.")}))})),K.open()}},"#place-template").generateCard(n)}var V=document.querySelector(".profile__edit-user-info"),U=document.querySelector(".profile__edit-avatar"),H=document.querySelector(".profile__add-button"),F=document.querySelector(".pop-up__text-input_type_name"),N=document.querySelector(".pop-up__text-input_type_description"),J=document.querySelector(".pop-up__text-input_type_avatar-src"),z=new B({nameSelector:".profile__name",bioSelector:".profile__description",avatarSelector:".profile__avatar"}),M=new x({items:[],renderer:function(e){var t=D(e,Y);M.addItem(t)}},".places__elements"),G=new s(".pop-up_func_img-view"),K=new m(".pop-up_func_confirm"),Q=new O(".pop-up_func_edit-avatar",(function(e,t){$.changeAvatar({avatar:e.link}).then((function(e){z.setAvatarSrc(e.avatar),Q.close()})).catch((function(e){return console.log(e+" Не удалось обновить аватар.")})).finally(t)}),(function(){J.value=z.getAvatarSrc()})),W=new O(".pop-up_func_edit",(function(e,t){$.editUser(e).then((function(e){z.setUserInfo(e),W.close()})).catch((function(e){return console.log(e+" Не удалось изменить данные пользователя.")})).finally(t)}),(function(){var e=z.getUserInfo();F.value=e.name,N.value=e.about})),X=new O(".pop-up_func_add",(function(e,t){$.addCard(e).then((function(e){var t=D(e,Y);M.addItemAsFirst(t),X.close()})).catch((function(e){return console.log(e+" Не удалось добавить карточку.")})).finally(t)}));W.setEventListeners(),Q.setEventListeners(),K.setEventListeners(),G.setEventListeners(),X.setEventListeners(),V.addEventListener("click",(function(){W.open()})),U.addEventListener("click",(function(){Q.open()})),H.addEventListener("click",(function(){X.open()}));var Y,Z,$=new T({url:"https://mesto.nomoreparties.co/v1/cohort-20/",token:"2d2f4b16-010b-47cb-9a21-aefcdcfade4d"}),ee=$.getUser(),te=$.getInitialCards();Promise.all([ee,te]).then((function(e){var t=e[0],n=e[1];Y=t._id,z.setUserInfo({name:t.name,about:t.about}),z.setAvatarSrc(t.avatar),M.items=n,M.renderItems()})).catch((function(e){return console.log(e)})),Z={formSelector:".pop-up__form",inputSelector:".pop-up__text-input",submitButtonSelector:".pop-up__submit",inactiveButtonClass:"pop-up__submit_disabled",inputErrorClass:"pop-up__text-input_invalid",errorClass:"pop-up__input-error_active"},Array.from(document.querySelectorAll(Z.formSelector)).forEach((function(e){new A(Z,e).enableValidation()}))})();