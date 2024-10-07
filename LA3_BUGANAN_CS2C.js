let score = prompt("Enter your score:");
score = Number(score);
let grade = (score >= 97) ? "1.00 Excellent" :
            (score >= 94 && score <= 96) ? "1.25 Excellent" :
            (score >= 91 && score <= 93) ? "1.50 Above Average" :
            (score >= 88 && score <= 90) ? "1.75 Above Average" :
            (score >= 85 && score <= 87) ? "2.00 Average" :
            (score >= 82 && score <= 84) ? "2.25 Average" :
            (score >= 79 && score <= 81) ? "2.50 Below Average" :
            (score >= 76 && score <= 78) ? "2.75 Below Average" :
            (score == 75) ? "3.00 Below Average" :
            (score >= 72 && score <= 74) ? "4.00 Poor" :
            (score <= 71) ? "5.00 Poor" : "Invalid score";
console.log("Your equivalent Grade is: " + grade);
let remarks = "";
if (score >= 90) {
    remarks = "HIGH PASS, Candidate for Cum Laude";
} else if (score >= 80 && score <= 89) {
    remarks = "AVERAGE PASS";
} else if (score >= 75 && score <= 79) {
    remarks = "LOW PASS";
} else if (score <= 74) {
    remarks = "FAILED, Needs Improvement";
} else {
    remarks = "Invalid score";
}
console.log("Final remarks: " + remarks);
