// In addition to Employee's properties and methods, Manager will also have the following:
// officeNumber
// getOfficeNum()
// getRole()—overridden to return 'Manager'

const Employee = require ('./Employee')

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        this.officeNumber = officeNumber
        super(name, id, email)        
    }

    getOfficeNum() {
        return this.officeNumber
    }

    getRole() {
        return 'Manager'
    }
}

module.exports = Manager