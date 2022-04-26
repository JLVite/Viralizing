import React from 'react';

class SearchResultExample extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="page-content">
        {/* Panel */}
        <div className="panel">
          <div className="panel-body">
            <form className="page-search-form" role="search">
              <div className="input-search input-search-dark">
                <i className="input-search-icon wb-search" aria-hidden="true"/>
                <input type="text" className="form-control" id="inputSearch" name="search" placeholder="Search Pages"/>
                <button type="button" className="input-search-close icon wb-close" aria-label="Close"/>
              </div>
            </form>
            <h1 className="page-search-title">Search Results For "Web Design"</h1>
            <p className="page-search-count">About
              <span>1,370</span> result (
              <span>0.13</span> seconds)</p>
            <ul className="list-group list-group-full list-group-dividered">
              <li className="list-group-item flex-column align-items-start">
                <h4><a href="https://github.com/amazingSurge?tab=repositories">Eademque Virtutum Laudantium</a></h4>
                <a className="search-result-link"
                   href="https://github.com/amazingSurge?tab=repositories">https://github.com/amazingSurge?tab=repositories</a>
                <p>Praebeat pecunias viveremus probamus opus apeirian haec perveniri,
                  memoriter.Praebeat pecunias viveremus probamus opus apeirian haec
                  perveniri, memoriter.Praebeat pecunias viveremus probamus opus
                  apeirian haec perveniri, memoriter.</p>
              </li>
              <li className="list-group-item flex-column align-items-start">
                <h4><a href="https://github.com/amazingSurge?tab=repositories">Parum Interiret Consequatur</a></h4>
                <a className="search-result-link"
                   href="https://github.com/amazingSurge?tab=repositories">https://github.com/amazingSurge?tab=repositories</a>
                <p>Regula magnosque ait. Rebus intellegimus occulte instituendarum quoniam
                  fabulae.Regula magnosque ait. Rebus intellegimus occulte instituendarum
                  quoniam fabulae.</p>
              </li>
              <li className="list-group-item flex-column align-items-start">
                <h4><a href="https://github.com/amazingSurge?tab=repositories">Afficitur Nos Veritus</a></h4>
                <a className="search-result-link"
                   href="https://github.com/amazingSurge?tab=repositories">https://github.com/amazingSurge?tab=repositories</a>
                <p>Elaboraret animum primo. Civibus assueverit consequatur affert viros
                  scribi.Elaboraret animum primo. Civibus assueverit consequatur
                  affert viros scribi.</p>
              </li>
              <li className="list-group-item flex-column align-items-start">
                <h4><a href="https://github.com/amazingSurge?tab=repositories">Tamquam Secumque Nacti</a></h4>
                <a className="search-result-link"
                   href="https://github.com/amazingSurge?tab=repositories">https://github.com/amazingSurge?tab=repositories</a>
                <p>Pronuntiaret liberos probes horribiles acri ita seiunctum aristippus.
                  Humili.Pronuntiaret liberos probes horribiles acri ita seiunctum
                  aristippus. Humili.Pronuntiaret liberos probes horribiles acri
                  ita seiunctum aristippus. Humili.</p>
              </li>
              <li className="list-group-item flex-column align-items-start">
                <h4><a href="https://github.com/amazingSurge?tab=repositories">Aliquo Difficile In</a></h4>
                <a className="search-result-link"
                   href="https://github.com/amazingSurge?tab=repositories">https://github.com/amazingSurge?tab=repositories</a>
                <p>Omnes arbitrer ancillae fictae maximam renovata, fieri pecuniae mundus.Omnes
                  arbitrer ancillae fictae maximam renovata, fieri pecuniae mundus.</p>
              </li>
              <li className="list-group-item flex-column align-items-start">
                <h4><a href="https://github.com/amazingSurge?tab=repositories">Quale Momenti Eitam</a></h4>
                <a className="search-result-link"
                   href="https://github.com/amazingSurge?tab=repositories">https://github.com/amazingSurge?tab=repositories</a>
                <p>Perpetiuntur inportuno iudicio errem. Reperire aliud delectus referta
                  fruuntur.Perpetiuntur inportuno iudicio errem. Reperire aliud delectus
                  referta fruuntur.</p>
              </li>
            </ul>
            <nav>
              <ul data-plugin="paginator" data-total={50} data-skin="pagination-no-border"/>
            </nav>
          </div>
        </div>
        {/* End Panel */}
      </div>

    );
  }
}

export default SearchResultExample;
