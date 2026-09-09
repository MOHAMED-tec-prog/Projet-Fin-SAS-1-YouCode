const prompt = require("prompt-sync")();

const trips = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 50
    },
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 50
    },
    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 50
    },
    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 50
    },
    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 50
    },
    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 50
    },
    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 50
    },
    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 50
    },
    {
        id: 9,
        departure: "Casablanca",
        destination: "Kenitra",
        departureTime: "15:00",
        arrivalTime: "16:45",
        price: 55,
        availableSeats: 50
    },
    {
        id: 10,
        departure: "Rabat",
        destination: "Kenitra",
        departureTime: "16:00",
        arrivalTime: "16:45",
        price: 30,
        availableSeats: 50
    },
    {
        id: 11,
        departure: "Rabat",
        destination: "Fes",
        departureTime: "17:00",
        arrivalTime: "19:30",
        price: 95,
        availableSeats: 50
    },
    {
        id: 12,
        departure: "Kenitra",
        destination: "Fes",
        departureTime: "17:30",
        arrivalTime: "20:00",
        price: 85,
        availableSeats: 50
    },
    {
        id: 13,
        departure: "Fes",
        destination: "Meknes",
        departureTime: "08:30",
        arrivalTime: "09:20",
        price: 35,
        availableSeats: 50
    },
    {
        id: 14,
        departure: "Fes",
        destination: "Oujda",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 130,
        availableSeats: 50
    },
    {
        id: 15,
        departure: "Meknes",
        destination: "Rabat",
        departureTime: "11:00",
        arrivalTime: "13:30",
        price: 80,
        availableSeats: 50
    },
    {
        id: 16,
        departure: "Meknes",
        destination: "Casablanca",
        departureTime: "12:00",
        arrivalTime: "15:00",
        price: 105,
        availableSeats: 50
    },
    {
        id: 17,
        departure: "Casablanca",
        destination: "El Jadida",
        departureTime: "16:30",
        arrivalTime: "18:00",
        price: 50,
        availableSeats: 50
    },
    {
        id: 18,
        departure: "El Jadida",
        destination: "Safi",
        departureTime: "18:30",
        arrivalTime: "20:30",
        price: 60,
        availableSeats: 50
    },
    {
        id: 19,
        departure: "Marrakech",
        destination: "Agadir",
        departureTime: "15:00",
        arrivalTime: "18:30",
        price: 100,
        availableSeats: 50
    },
    {
        id: 20,
        departure: "Agadir",
        destination: "Safi",
        departureTime: "19:00",
        arrivalTime: "22:00",
        price: 95,
        availableSeats: 50
    }
]

const tickets = [];

function menuePrincipale(){

    console.log("=================================");
    console.log("        RAILWAY MANAGER");
    console.log("=================================");
    console.log("");
    console.log("1. Afficher les trajets");
    console.log("2. Acheter un ticket");
    console.log("3. Afficher les tickets");
    console.log("4. Annuler un ticket");
    console.log("5. Rechercher un ticket");
    console.log("6. Filtrer les trajets");
    console.log("7. Trier les trajets");
    console.log("0. Quitter");
    console.log("");
    
    let choice = Number(prompt("Votre choix : "));

    if (choice === 1) {
        afficherTrajets()        
    }else if (choice ===2){
        acheterTicket()
    }else if (choice === 3){
       afficherTickets ()
    }else if (choice === 4){
        annulerTicket()
    }



}

function afficherTrajets() {
    
    console.log("");
    console.log("=================================");
    console.log("          LES TRAJETS");
    console.log("=================================");

    for(let i = 0 ; i < trips.length ; i++){
        console.log("#" + trips[i].id + " " +trips[i].departure + " → " + trips[i].destination);
        console.log("Départ : " + trips[i].departureTime );
        console.log("Arrivée : " + trips[i].arrivalTime );
        console.log("prix :" + trips[i].price + "DH");
        console.log("Places disponibles : " + trips[i].availableSeats);
    }

}

function acheterTicket() {
    let passengerName = prompt("Nom du passager : ");
    let tripId = Number(prompt("Identifiant du trajet : "));
    let trip;

    for (let i = 0; i < trips.length; i++) {
        if (trips[i].id === tripId) {
            trip = trips[i];
        }
    }

    if (trip === null) {
        console.log("Trajet introuvable.");
        return;
    }

    if (trip.availableSeats === 0) {
        console.log("Train complet.");
        return;
    }

    let ticketId = tickets.length + 1;
    let seatNumber = 51 - trip.availableSeats;

    let ticket = {
        id: ticketId,
        passengerName: passengerName,
        tripId: trip.id,
        seatNumber: seatNumber,
        price: trip.price
    };

    trip.availableSeats--;
    tickets.push(ticket);

    console.log("");
    console.log("Ticket acheté avec succès.");
    console.log("Ticket #" + ticket.id);
    console.log("Passager : " + ticket.passengerName);
    console.log("Trajet : " + trip.departure + " → " + trip.destination);
    console.log("Place : " + ticket.seatNumber);
    console.log("Prix : " + ticket.price + " DH");
}

function afficherTickets(){
    if(tickets.length === 0){
    console.log("Aucun ticket enregistré.")
    return;}
    

    console.log("");
    console.log("=== TICKETS ===");
    console.log("");
    for (let i = 0; i < tickets.length; i++) {
    console.log("Ticket #" + tickets[i].id);
    console.log("Passager : " + tickets[i].passengerName);
    console.log("Trajet : " + tickets[i].departure + "→ " + tickets[i].destination)
    console.log("Place : " + tickets[i].seatNumber);
    console.log("Prix : " + tickets[i].price + "DH");
    }
}

function annulerTicket(){
    if(tickets.length === 0){
    console.log("Ticket introuvable.")
      return;
    }
    let ticketId = Number(prompt("Identifiant du ticket : "));
    for( let i = 0 ; i<tickets.length ; i++){
        if(tickets[i].id===ticketId){
             tickets.splice( i , 1);
        console.log("Ticket annulé avec succès.")
        return;
    } 
       
    }
    console.log("Ticket introuvable.");
}

