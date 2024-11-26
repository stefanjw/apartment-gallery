import React, { useEffect, useState } from "react";
import { ApartmentData, ApartmentService } from "../services/ApartmentService";
import "bootstrap/dist/css/bootstrap.min.css";

const ApartmentGallery: React.FC = () => {
    const [apartments, setApartments] = useState<ApartmentData[]>([]);
    const [filteredApartments, setFilteredApartments] = useState<ApartmentData[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;

    useEffect(() => {
        const fetchData = async () => {
            const data = await ApartmentService.getApartments();
            setApartments(data);
            setFilteredApartments(data);
        };

        fetchData();
    }, []);

    useEffect(() => {
        const results = apartments.filter((apartment) =>
            apartment.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredApartments(results);
        setCurrentPage(1); // Reset naar de eerste pagina bij zoeken
    }, [searchTerm, apartments]);

    // Pagineren van de data
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredApartments.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(filteredApartments.length / itemsPerPage);

    return (
        <div className="container mt-4">
            {/* Titel en Zoekveld */}
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="fw-bold">Apartment Gallery</h2>
                <div className="d-flex align-items-center">
                    <input
                        type="text"
                        className="form-control form-control-sm me-2"
                        placeholder="Search by title..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{ maxWidth: "200px" }}
                    />
                </div>
            </div>

            {/* Grid Layout */}
            <div className="row g-3">
                {currentItems.map((apartment) => (
                    <div className="col-6 col-md-4 col-lg-3" key={apartment.id}>
                        <div className="card shadow-sm h-100">
                            <img
                                src={apartment.imageUrl}
                                alt={apartment.title}
                                className="card-img-top"
                                style={{ height: "180px", objectFit: "cover" }}
                            />
                            <div className="card-body text-center">
                                <h6 className="card-title fw-semibold">{apartment.title}</h6>
                                <p className="card-text text-muted">{apartment.price}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <nav className="d-flex justify-content-between align-items-center mt-4">
                <button
                    className="btn btn-outline-secondary"
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(currentPage - 1)}
                >
                    Previous
                </button>
                <ul className="pagination pagination-sm mb-0">
                    {[...Array(totalPages)].map((_, i) => (
                        <li key={i} className={`page-item ${currentPage === i + 1 ? "active" : ""}`}>
                            <button
                                className="page-link"
                                onClick={() => setCurrentPage(i + 1)}
                            >
                                {i + 1}
                            </button>
                        </li>
                    ))}
                </ul>
                <button
                    className="btn btn-outline-secondary"
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(currentPage + 1)}
                >
                    Next
                </button>
            </nav>
        </div>
    );
};

export default ApartmentGallery;



