import { SalePage } from "types/sale";

type Props = {
    page: SalePage;
    onPageChange: Function;
}

const Pagination = ( { page, onPageChange } : Props ) => {

    const pagina = page.number + 1;
    const proximaPagina = page.number + 1;
    const paginaAnterior = page.number - 1;

    return (
        <div className="d-flex justify-content-center">
            <nav>
                <ul className="pagination">
                    <li className={`page-item ${ page.first ? 'disabled' : '' }`}>
                        <button className="page-link" onClick={() => onPageChange(paginaAnterior)}>Anterior</button>
                    </li>
                    <li className="page-item disabled">
                        <span className="page-link">{pagina}</span>
                    </li>
                    <li className={ `page-item ${ page.last ? 'disabled' : '' }` }>
                        <button className="page-link" onClick={() => onPageChange(proximaPagina)}>Próxima</button>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Pagination;