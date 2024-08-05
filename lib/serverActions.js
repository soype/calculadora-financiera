export const calculateMortgage = (prevState, formData) => {
    // console.log(formData);
    const data = {
        houseValue: formData.get("houseValue"),
        loanAmount: formData.get("loanAmount"),
        loanMax: formData.get("loanMax"),
        interestRate: formData.get("interestRate"),
        loanDuration: formData.get("loanDuration"),
        salary: formData.get("salary")
    }

    return data;
};