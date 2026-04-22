import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronDown, Lock } from 'lucide-react';

interface CartItem {
    id: number;
    name: string;
    price: number;
    image: string;
    color: string;
    size: string;
    quantity: number;
}

interface CheckoutPageProps {
    cartItems: CartItem[];
}

export const CheckoutPage = ({ cartItems }: CheckoutPageProps) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [emailOffers, setEmailOffers] = useState(true);
    const [country, setCountry] = useState('United States');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [company, setCompany] = useState('');
    const [address, setAddress] = useState('');
    const [apartment, setApartment] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [phone, setPhone] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('credit');
    const [cardNumber, setCardNumber] = useState('');
    const [expiry, setExpiry] = useState('');
    const [securityCode, setSecurityCode] = useState('');
    const [nameOnCard, setNameOnCard] = useState('');
    const [useSameAddress, setUseSameAddress] = useState(true);
    const [discountCode, setDiscountCode] = useState('');

    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = 0; // Free shipping
    const total = subtotal + shipping;

    const handlePayNow = () => {
        alert('Payment processed successfully!');
        navigate('/');
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="border-b border-neutral-200 py-4">
                <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
                    <h1 className="text-2xl font-serif italic">Dime</h1>
                    <Lock size={18} className="text-neutral-400" />
                </div>
            </header>

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">
                {/* Left Column - Form */}
                <div className="flex-1 px-4 lg:px-12 py-8 lg:border-r border-neutral-200">

                    {/* Express Checkout */}
                    <div className="mb-8">
                        <p className="text-xs text-neutral-500 text-center mb-4">Express checkout</p>
                        <div className="flex gap-2">
                            <button className="flex-1 h-12 bg-[#5A31F4] text-white text-sm font-medium rounded flex items-center justify-center">
                                shop
                            </button>
                            <button className="flex-1 h-12 bg-[#FFC439] text-black text-sm font-medium rounded flex items-center justify-center">
                                PayPal
                            </button>
                            <button className="flex-1 h-12 bg-black text-white text-sm font-medium rounded flex items-center justify-center">
                                G Pay
                            </button>
                        </div>
                        <p className="text-xs text-neutral-500 text-center mt-4">OR</p>
                    </div>

                    {/* Contact */}
                    <div className="mb-8">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-sm font-medium">Contact</h2>
                            <button className="text-sm text-blue-600 hover:underline">Sign in</button>
                        </div>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            className="w-full h-12 border border-neutral-300 px-4 text-sm focus:outline-none focus:border-black"
                        />
                        <label className="flex items-center gap-2 mt-3 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={emailOffers}
                                onChange={(e) => setEmailOffers(e.target.checked)}
                                className="w-4 h-4"
                            />
                            <span className="text-sm text-neutral-600">Email me with news and offers</span>
                        </label>
                    </div>

                    {/* Delivery */}
                    <div className="mb-8">
                        <h2 className="text-sm font-medium mb-4">Delivery</h2>

                        {/* Country */}
                        <div className="relative mb-3">
                            <label className="text-xs text-neutral-500 absolute top-2 left-4">Country/Region</label>
                            <select
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                                className="w-full h-14 pt-4 border border-neutral-300 px-4 text-sm bg-white focus:outline-none focus:border-black appearance-none cursor-pointer"
                            >
                                <option>United States</option>
                                <option>Canada</option>
                                <option>United Kingdom</option>
                            </select>
                            <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>

                        {/* Name */}
                        <div className="flex gap-3 mb-3">
                            <input
                                type="text"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                placeholder="First name"
                                className="flex-1 h-12 border border-neutral-300 px-4 text-sm focus:outline-none focus:border-black"
                            />
                            <input
                                type="text"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                placeholder="Last name"
                                className="flex-1 h-12 border border-neutral-300 px-4 text-sm focus:outline-none focus:border-black"
                            />
                        </div>

                        {/* Company */}
                        <input
                            type="text"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            placeholder="Company (optional)"
                            className="w-full h-12 border border-neutral-300 px-4 text-sm mb-3 focus:outline-none focus:border-black"
                        />

                        {/* Address */}
                        <input
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            placeholder="Address"
                            className="w-full h-12 border border-neutral-300 px-4 text-sm mb-3 focus:outline-none focus:border-black"
                        />

                        {/* Apartment */}
                        <input
                            type="text"
                            value={apartment}
                            onChange={(e) => setApartment(e.target.value)}
                            placeholder="Apartment, suite, etc. (optional)"
                            className="w-full h-12 border border-neutral-300 px-4 text-sm mb-3 focus:outline-none focus:border-black"
                        />

                        {/* City, State, Zip */}
                        <div className="flex gap-3 mb-3">
                            <input
                                type="text"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                placeholder="City"
                                className="flex-1 h-12 border border-neutral-300 px-4 text-sm focus:outline-none focus:border-black"
                            />
                            <div className="relative flex-1">
                                <select
                                    value={state}
                                    onChange={(e) => setState(e.target.value)}
                                    className="w-full h-12 border border-neutral-300 px-4 text-sm bg-white focus:outline-none focus:border-black appearance-none cursor-pointer"
                                >
                                    <option value="">State</option>
                                    <option>California</option>
                                    <option>New York</option>
                                    <option>Texas</option>
                                </select>
                                <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                            </div>
                            <input
                                type="text"
                                value={zipCode}
                                onChange={(e) => setZipCode(e.target.value)}
                                placeholder="ZIP code"
                                className="flex-1 h-12 border border-neutral-300 px-4 text-sm focus:outline-none focus:border-black"
                            />
                        </div>

                        {/* Phone */}
                        <input
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Phone"
                            className="w-full h-12 border border-neutral-300 px-4 text-sm focus:outline-none focus:border-black"
                        />
                    </div>

                    {/* Shipping Method */}
                    <div className="mb-8">
                        <h2 className="text-sm font-medium mb-4">Shipping method</h2>
                        <div className="bg-neutral-100 p-4 text-sm text-neutral-500 text-center">
                            Enter your shipping address to view available shipping methods.
                        </div>
                    </div>

                    {/* Payment */}
                    <div className="mb-8">
                        <h2 className="text-sm font-medium mb-2">Payment</h2>
                        <p className="text-xs text-neutral-500 mb-4">All transactions are secure and encrypted.</p>

                        {/* Credit Card Option */}
                        <div className={`border ${paymentMethod === 'credit' ? 'border-black' : 'border-neutral-300'} mb-2`}>
                            <label className="flex items-center justify-between p-4 cursor-pointer">
                                <div className="flex items-center gap-3">
                                    <input
                                        type="radio"
                                        name="payment"
                                        checked={paymentMethod === 'credit'}
                                        onChange={() => setPaymentMethod('credit')}
                                        className="w-4 h-4"
                                    />
                                    <span className="text-sm">Credit card</span>
                                </div>
                                <div className="flex gap-1">
                                    <div className="w-8 h-5 bg-blue-700 rounded text-white text-[8px] flex items-center justify-center font-bold">VISA</div>
                                    <div className="w-8 h-5 bg-orange-500 rounded"></div>
                                    <div className="w-8 h-5 bg-blue-600 rounded text-white text-[8px] flex items-center justify-center font-bold">AMEX</div>
                                </div>
                            </label>

                            {paymentMethod === 'credit' && (
                                <div className="bg-neutral-50 p-4 border-t border-neutral-200">
                                    <input
                                        type="text"
                                        value={cardNumber}
                                        onChange={(e) => setCardNumber(e.target.value)}
                                        placeholder="Card number"
                                        className="w-full h-12 border border-neutral-300 px-4 text-sm mb-3 focus:outline-none focus:border-black bg-white"
                                    />
                                    <div className="flex gap-3 mb-3">
                                        <input
                                            type="text"
                                            value={expiry}
                                            onChange={(e) => setExpiry(e.target.value)}
                                            placeholder="Expiration date (MM / YY)"
                                            className="flex-1 h-12 border border-neutral-300 px-4 text-sm focus:outline-none focus:border-black bg-white"
                                        />
                                        <input
                                            type="text"
                                            value={securityCode}
                                            onChange={(e) => setSecurityCode(e.target.value)}
                                            placeholder="Security code"
                                            className="flex-1 h-12 border border-neutral-300 px-4 text-sm focus:outline-none focus:border-black bg-white"
                                        />
                                    </div>
                                    <input
                                        type="text"
                                        value={nameOnCard}
                                        onChange={(e) => setNameOnCard(e.target.value)}
                                        placeholder="Name on card"
                                        className="w-full h-12 border border-neutral-300 px-4 text-sm mb-3 focus:outline-none focus:border-black bg-white"
                                    />
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={useSameAddress}
                                            onChange={(e) => setUseSameAddress(e.target.checked)}
                                            className="w-4 h-4"
                                        />
                                        <span className="text-sm text-neutral-600">Use shipping address as billing address</span>
                                    </label>
                                </div>
                            )}
                        </div>

                        {/* PayPal Option */}
                        <div className={`border ${paymentMethod === 'paypal' ? 'border-black' : 'border-neutral-300'} mb-2`}>
                            <label className="flex items-center justify-between p-4 cursor-pointer">
                                <div className="flex items-center gap-3">
                                    <input
                                        type="radio"
                                        name="payment"
                                        checked={paymentMethod === 'paypal'}
                                        onChange={() => setPaymentMethod('paypal')}
                                        className="w-4 h-4"
                                    />
                                    <span className="text-sm">PayPal</span>
                                </div>
                                <span className="text-sm text-blue-600 font-bold italic">PayPal</span>
                            </label>
                        </div>

                        {/* Klarna Option */}
                        <div className={`border ${paymentMethod === 'klarna' ? 'border-black' : 'border-neutral-300'}`}>
                            <label className="flex items-center justify-between p-4 cursor-pointer">
                                <div className="flex items-center gap-3">
                                    <input
                                        type="radio"
                                        name="payment"
                                        checked={paymentMethod === 'klarna'}
                                        onChange={() => setPaymentMethod('klarna')}
                                        className="w-4 h-4"
                                    />
                                    <span className="text-sm">Klarna - Flexible payments</span>
                                </div>
                                <div className="bg-pink-400 text-white text-xs px-2 py-1 rounded">Klarna</div>
                            </label>
                        </div>
                    </div>

                    {/* Pay Now Button */}
                    <button
                        onClick={handlePayNow}
                        className="w-full h-14 bg-black text-white text-sm font-medium tracking-wider hover:bg-neutral-800 transition-colors mb-8"
                    >
                        Pay now
                    </button>

                    {/* Footer Links */}
                    <div className="flex gap-4 text-xs text-neutral-500 justify-center">
                        <a href="#" className="hover:underline">Refund policy</a>
                        <a href="#" className="hover:underline">Shipping</a>
                        <a href="#" className="hover:underline">Privacy policy</a>
                        <a href="#" className="hover:underline">Terms of service</a>
                    </div>
                </div>

                {/* Right Column - Order Summary */}
                <div className="w-full lg:w-[400px] bg-neutral-50 px-4 lg:px-8 py-8">
                    {/* Cart Items */}
                    {cartItems.map((item) => (
                        <div key={item.id} className="flex gap-4 mb-4">
                            <div className="relative w-16 h-20 bg-neutral-200 flex-shrink-0 rounded">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover rounded"
                                />
                                <span className="absolute -top-2 -right-2 w-5 h-5 bg-neutral-500 text-white text-xs rounded-full flex items-center justify-center">
                                    {item.quantity}
                                </span>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-sm font-medium">{item.name}</h3>
                                <p className="text-xs text-neutral-500">{item.color} - {item.size}</p>
                            </div>
                            <span className="text-sm">${item.price * item.quantity}.00</span>
                        </div>
                    ))}

                    {/* Discount Code */}
                    <div className="flex gap-2 mb-6 mt-6">
                        <input
                            type="text"
                            value={discountCode}
                            onChange={(e) => setDiscountCode(e.target.value)}
                            placeholder="Discount code or gift card"
                            className="flex-1 h-12 border border-neutral-300 px-4 text-sm focus:outline-none focus:border-black bg-white"
                        />
                        <button className="px-6 h-12 bg-neutral-200 text-sm text-neutral-600 hover:bg-neutral-300 transition-colors">
                            Apply
                        </button>
                    </div>

                    {/* Totals */}
                    <div className="space-y-2 border-t border-neutral-200 pt-4">
                        <div className="flex justify-between text-sm">
                            <span>Subtotal</span>
                            <span>${subtotal}.00</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span>Shipping</span>
                            <span className="text-neutral-500">Enter shipping address</span>
                        </div>
                        <div className="flex justify-between text-base font-medium pt-2">
                            <span>Total</span>
                            <span>
                                <span className="text-xs text-neutral-500 mr-2">USD</span>
                                ${total}.00
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
