var db = openDatabase('blood-donor-db', '1.0', 'Donor database', 2 * 1024 * 1024);
db.transaction(function (tx) {
	tx.executeSql('CREATE TABLE donor (empId unique, name, contact number, bldGrp, loc)');
	tx.executeSql('INSERT INTO donor (empId, name, contact, bldGrp, loc) VALUES (1, "Vinay", 1234567890, "O+", "Trivandrum")');
	tx.executeSql('INSERT INTO donor (empId, name, contact, bldGrp, loc) VALUES (2, "Vishnu", 1234567890, "O+", "Trivandrum")');
});