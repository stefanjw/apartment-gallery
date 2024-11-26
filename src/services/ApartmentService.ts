export interface ApartmentData {
    id: number;
    title: string;
    imageUrl: string;
    price: string;
}

export class ApartmentService {
    static async getApartments(): Promise<ApartmentData[]> {
        return [
            {
                id: 1,
                title: "Modern Apartment",
                imageUrl: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?crop=entropy&cs=tinysrgb&fit=crop&w=400&h=300&q=80",
                price: "€1200 / maand",
            },
            {
                id: 2,
                title: "City Center Studio",
                imageUrl: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?crop=entropy&cs=tinysrgb&fit=crop&w=400&h=300&q=80",
                price: "€950 / maand",
            },
            {
                id: 3,
                title: "Spacious Loft",
                imageUrl: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?crop=entropy&cs=tinysrgb&fit=crop&w=400&h=300&q=80",
                price: "€1400 / maand",
            },
            {
                id: 4,
                title: "Cozy Apartment",
                imageUrl: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?crop=entropy&cs=tinysrgb&fit=crop&w=400&h=300&q=80",
                price: "€1100 / maand",
            },
            {
                id: 5,
                title: "Luxury Penthouse",
                imageUrl: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?crop=entropy&cs=tinysrgb&fit=crop&w=400&h=300&q=80",
                price: "€3000 / maand",
            },
            {
                id: 6,
                title: "Suburban House",
                imageUrl: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?crop=entropy&cs=tinysrgb&fit=crop&w=400&h=300&q=80",
                price: "€1800 / maand",
            },
            {
                id: 7,
                title: "Small Studio",
                imageUrl: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?crop=entropy&cs=tinysrgb&fit=crop&w=400&h=300&q=80",
                price: "€750 / maand",
            },
            {
                id: 8,
                title: "Charming Cottage",
                imageUrl: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?crop=entropy&cs=tinysrgb&fit=crop&w=400&h=300&q=80",
                price: "€2000 / maand",
            },
            {
                id: 9,
                title: "Charming Cottage",
                imageUrl: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?crop=entropy&cs=tinysrgb&fit=crop&w=400&h=300&q=80",
                price: "€2000 / maand",
            },
            {
                id: 10,
                title: "Charming Cottage",
                imageUrl: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?crop=entropy&cs=tinysrgb&fit=crop&w=400&h=300&q=80",
                price: "€2000 / maand",
            },
            {
                id: 11,
                title: "Charming Cottage",
                imageUrl: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?crop=entropy&cs=tinysrgb&fit=crop&w=400&h=300&q=80",
                price: "€2000 / maand",
            },
            {
                id: 12,
                title: "Charming Cottage",
                imageUrl: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?crop=entropy&cs=tinysrgb&fit=crop&w=400&h=300&q=80",
                price: "€2000 / maand",
            },
            {
                id: 13,
                title: "Charming Cottage",
                imageUrl: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?crop=entropy&cs=tinysrgb&fit=crop&w=400&h=300&q=80",
                price: "€2000 / maand",
            },
            {
                id: 14,
                title: "Charming Cottage",
                imageUrl: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?crop=entropy&cs=tinysrgb&fit=crop&w=400&h=300&q=80",
                price: "€2000 / maand",
            },
            {
                id: 15,
                title: "Charming Cottage",
                imageUrl: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?crop=entropy&cs=tinysrgb&fit=crop&w=400&h=300&q=80",
                price: "€2000 / maand",
            },
            {
                id: 16,
                title: "Charming Cottage",
                imageUrl: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?crop=entropy&cs=tinysrgb&fit=crop&w=400&h=300&q=80",
                price: "€2000 / maand",
            },
            {
                id: 17,
                title: "Charming Cottage",
                imageUrl: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?crop=entropy&cs=tinysrgb&fit=crop&w=400&h=300&q=80",
                price: "€2000 / maand",
            },

      
        ];
    }
}
