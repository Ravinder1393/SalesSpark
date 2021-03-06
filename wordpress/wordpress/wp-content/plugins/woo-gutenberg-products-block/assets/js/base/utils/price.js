/**
 * External dependencies
 */
import { sprintf } from '@wordpress/i18n';
import { CURRENCY } from '@woocommerce/settings';

/**
 * Format a price with currency data.
 *
 * @param {number} value Number to format.
 * @param {string} priceFormat  Price format string.
 * @param {string} currencySymbol Curency symbol.
 */
export const formatPrice = (
	value,
	priceFormat = CURRENCY.price_format,
	currencySymbol = CURRENCY.symbol
) => {
	if ( value === '' || undefined === value ) {
		return '';
	}
	const formattedNumber = parseInt( value, 10 );
	const formattedValue = sprintf(
		priceFormat,
		currencySymbol,
		formattedNumber
	);

	// This uses a textarea to magically decode HTML currency symbols.
	const txt = document.createElement( 'textarea' );
	txt.innerHTML = formattedValue;
	return txt.value;
};
