import React, { useState } from 'react';
import { AiOutlineInfoCircle } from 'react-icons/ai';

export default function Calculator() {
    const [totalAmount, setTotalAmount] = useState('');
    const [downPayment, setDownPayment] = useState('');
    const [amortizationPeriod, setAmortizationPeriod] = useState('');
    const [interestRate, setInterestRate] = useState('');
    const [result, setResult] = useState(0);

    const calculateMonthlyPayment = () => {
        const loanAmount = totalAmount - downPayment;
        const monthlyInterestRate = interestRate / 100 / 12;
        const months = amortizationPeriod;

        if (loanAmount > 0 && months > 0 && monthlyInterestRate >= 0) {
            const monthlyPayment =
                monthlyInterestRate === 0
                    ? loanAmount / months
                    : (loanAmount * monthlyInterestRate) /
                    (1 - Math.pow(1 + monthlyInterestRate, -months));
            setResult(monthlyPayment.toFixed(2));
        } else {
            setResult(0);
        }
    };

    return (
        <div>
            <p className="text-2xl pt-6 border-t my-3">Loan Calculator</p>

            <div className="w-4/5 p-6 py-8 bg-[#F7F7F7] rounded-xl space-y-8 relative">
                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Loan Formula</h3>
                    <div className="relative group">
                        <AiOutlineInfoCircle className="text-gray-500 w-5 h-5 cursor-pointer" />
                        <div className="absolute hidden group-hover:block bg-gray-800 text-white text-sm rounded-lg p-3 w-64 top-8 -right-16 shadow-lg z-10">
                            Monthly Payment (M) =
                            <br />
                            <span className="text-blue-400">[ P × r ] / [ 1 - (1 + r)<sup>-n</sup> ]</span>
                            <br />
                            Where:
                            <ul className="list-disc list-inside">
                                <li>P = Loan Amount</li>
                                <li>r = Monthly Interest Rate</li>
                                <li>n = Number of Payments</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <InputField
                    label="Total Amount"
                    placeholder="10000"
                    value={totalAmount}
                    onChange={(e) => setTotalAmount(Number(e.target.value))}
                />

                <InputField
                    label="Down Payment"
                    placeholder="3000"
                    value={downPayment}
                    onChange={(e) => setDownPayment(Number(e.target.value))}
                />

                <InputField
                    label="Amortization Period (months):"
                    placeholder="12"
                    value={amortizationPeriod}
                    onChange={(e) => setAmortizationPeriod(Number(e.target.value))}
                />

                <InputField
                    label="Interest Rate (%):"
                    placeholder="5"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                />

                <div className="flex items-center justify-between">
                    <button
                        onClick={calculateMonthlyPayment}
                        className="btn btn-primary text-white text-base rounded-3xl"
                    >
                        Calculate
                    </button>

                    <p className="text-xl text-gray-500 gap-2">
                        Monthly Payment:{' '}
                        <span className="text-[#4D6EFF] text-2xl">${result}</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

const InputField = ({ label, placeholder, value, onChange }) => {
    return (
        <div className=' w-full '>
            < label className="block text-sm font-medium  mb-1 text-gray-700">{label}</label>
            <input
                placeholder={placeholder}
                type="text"
                value={value}
                onChange={onChange}
                className="input rounded-3xl input-bordered w-full"
                onKeyDown={(e) => {
                    if (!/^[0-9]$/.test(e.key) && e.key !== "Backspace") {
                        e.preventDefault();
                    }
                }}
            />
        </div>
    );
};
