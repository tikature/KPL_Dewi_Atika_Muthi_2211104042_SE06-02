function getDaysPerMonth(month) {
    const daysPerMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return daysPerMonth[month - 1] || "Invalid month";
}
 
console.log(getDaysPerMonth(3)); // Output: 31
console.log(getDaysPerMonth(4)); // Output: 31
console.log(getDaysPerMonth(13)); // Output: Invalid month