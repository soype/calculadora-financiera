export const calculateMortgage = (prevState, formData) => {
    const data = {
        houseValue: formData.get("houseValue"),
        loanAmount: formData.get("loanAmount"),
        loanMax: formData.get("loanMax"),
        interestRate: formData.get("interestRate"),
        loanDuration: formData.get("loanDuration"),
        salary: formData.get("salary")
    };

    // Check for empty fields
    for (const [key, value] of Object.entries(data)) {
        if(key !== "salary"){
            if (value.length < 1 || value === null) {
                return { ...prevState, error: key };
            }
        }
    }

    // Check for negative values
    Object.values(data).forEach(value => {
        if(value < 0){
            return { error: "global", message: "Ingrese valores positivos" };
        }
    });

    const loanMonths = data.loanDuration * 12;

    return { ...prevState, data, error: null };
};
