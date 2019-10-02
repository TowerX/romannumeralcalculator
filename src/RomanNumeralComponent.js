import React, {useState} from 'react';

export default function RomanNumeralComponent () {
    const [calculatedAnswer, updateAnswer] = useState("Nulla");
    const [input, updateInput] = useState("");


    const addAndConvertToRomanNumerals = (ints) => {
        // calculate the sum of the elements
        ints = ints.reduce((total, amount, index) => total + amount);
        // store the resulting roman value
        let result = "";
        // array holding the decimals
        let intsValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
        // array holding the roman numbers
        let romanValue = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
        // iterate through the array and map the total to roman numbers (ints limit = 1000)
        if (ints > 0 && ints < 1001) {
            for (let i = 0; i < intsValue.length; i++) {
                while (intsValue[i] <= ints) {
                    result += romanValue[i];
                    ints -= intsValue[i];
                    console.log(result);
                }
            }
            return result;
        } else {
            // default to nulla if ints === 0
            ints = "Nulla";
        }
        return ints;
    }

    const addNumbers = (inputString) => {
        const numbersStringArray = inputString.split(",");
        const numbers = numbersStringArray.map((numberAsString) => { return parseInt(numberAsString, 10) })

        /* numbers is an array of ints. E.g. [1, 2, 3] */
        const answer = addAndConvertToRomanNumerals(numbers)

        return answer;
    }

    const handleChange = (event) => {
        updateInput(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const answer = addNumbers(input);
        updateAnswer(answer);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label style={{paddingRight: "10px"}}>
                    <span style={{paddingRight: "10px"}}>Numbers (separated by commas):</span>
                    <input type="text" name="input-form" onChange={handleChange}/>
                </label>
                <input type="submit" value="Add Numbers" />
            </form>
            <div>Answer in Roman Numerals: {calculatedAnswer}</div>
        </div>
    )
}