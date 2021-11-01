'use strict';

/**
 * Common helper object.
 * @constructor
 */
let CommonHelper = function() {

	/**
	 * Wait until element will be visible and click
	 *
	 * @param element
	 */
	this.waitAndClick = function (element) {
		element.waitForClickable();
		element.waitForDisplayed();
		element.click();
	};

    /**
	 * Wait until element will be visible and send keys
	 *
	 * @param element
	 * @param text
	 */
	this.waitAndSendKeys = function (element, text) {
		element.waitForDisplayed();
		element.clearValue();
		element.setValue(text);
	};
};

module.exports = new CommonHelper();
