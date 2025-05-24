function sumOfNumbers(nums) {
    let total = 0;
    nums.forEach(num => {
        if (!isNaN(num)) {
            total += num;
        }
    });
    return total;
}
