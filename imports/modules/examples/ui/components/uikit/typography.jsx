import React from 'react';

class TypographyExample extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="page-header">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="../index.html">Home</a></li>
            <li className="breadcrumb-item active">Basic UI</li>
          </ol>
          <h1 className="page-title">Typography</h1>
          <div className="page-header-actions">
            <button type="button" className="btn btn-sm btn-icon btn-inverse btn-round" data-toggle="tooltip"
                    data-original-title="Edit">
              <i className="icon wb-pencil" aria-hidden="true"/>
            </button>
            <button type="button" className="btn btn-sm btn-icon btn-inverse btn-round" data-toggle="tooltip"
                    data-original-title="Refresh">
              <i className="icon wb-refresh" aria-hidden="true"/>
            </button>
            <button type="button" className="btn btn-sm btn-icon btn-inverse btn-round" data-toggle="tooltip"
                    data-original-title="Setting">
              <i className="icon wb-settings" aria-hidden="true"/>
            </button>
          </div>
        </div>
        <div className="page-content">
          {/* Panel */}
          <div className="panel">
            <div className="panel-body container-fluid">
              <div className="row row-lg">
                <div className="col-xl-6">
                  {/* Example Headings */}
                  <div className="example-wrap">
                    <h4 className="example-title">Headings</h4>
                    <p>All HTML headings, <code>&lt;h1&gt;</code> through <code>&lt;h6&gt;</code>,
                      are available. <code>.h1</code> through <code>.h6</code> classes
                      are also available, for when you want to match the font styling
                      of a heading but still want your text to be displayed inline.</p>
                    <div className="example">
                      <h1>h1. Bootstrap heading</h1>
                      <h2>h2. Bootstrap heading</h2>
                      <h3>h3. Bootstrap heading</h3>
                      <h4>h4. Bootstrap heading</h4>
                      <h5>h5. Bootstrap heading</h5>
                      <h6>h6. Bootstrap heading</h6>
                    </div>
                  </div>
                  {/* End Example Headings */}
                </div>
                <div className="col-xl-6">
                  {/* Example Styled Headings */}
                  <div className="example-wrap">
                    <h4 className="example-title">Styled Headings</h4>
                    <p>Create lighter, secondary text in any heading with a generic
                      <code>&lt;small&gt;</code> tag or the <code>.small</code> class.</p>
                    <div className="example">
                      <h1><i className="icon wb-book" aria-hidden="true"/>Bootstrap heading
                        <small>Secondary text</small>
                      </h1>
                      <h2><i className="icon wb-book" aria-hidden="true"/>Bootstrap heading
                        <small>Secondary text</small>
                      </h2>
                      <h3><i className="icon wb-book" aria-hidden="true"/>Bootstrap heading
                        <small>Secondary text</small>
                      </h3>
                      <h4><i className="icon wb-book" aria-hidden="true"/>Bootstrap heading
                        <small>Secondary text</small>
                      </h4>
                      <h5><i className="icon wb-book" aria-hidden="true"/>Bootstrap heading
                        <small>Secondary text</small>
                      </h5>
                      <h6><i className="icon wb-book" aria-hidden="true"/>Bootstrap heading
                        <small>Secondary text</small>
                      </h6>
                    </div>
                  </div>
                  {/* End Example Styled Headings */}
                </div>
              </div>
              <div className="row row-lg">
                <div className="col-xl-4 col-md-6">
                  {/* Example Body Copy */}
                  <div className="example-wrap">
                    <h4 className="example-title">Body Copy</h4>
                    <p>Bootstrap's global default <code>font-size</code> is
                      <strong>14px</strong>, with a <code>line-height</code> of
                      <strong>1.428</strong>. This is applied to the <code>&lt;body&gt;</code> and all paragraphs. In
                      addition, <code>&lt;p&gt;</code> (paragraphs)
                      receive a bottom margin of half their computed line-height (10px
                      by default).</p>
                  </div>
                  {/* End Example Body Copy */}
                </div>
                <div className="col-xl-4 col-md-6">
                  {/* Example Highlight */}
                  <div className="example-wrap">
                    <h4 className="example-title">Highlight</h4>
                    <p>For highlighting a run of text due to its relevance in another
                      context, use the <code>&lt;mark&gt;</code> tag. Like this:</p>
                    <p>You can use the mark tag to
                      <mark>highlight</mark> text.
                    </p>
                  </div>
                  {/* End Example Highlight */}
                </div>
                <div className="col-xl-4 col-md-6">
                  {/* Example Addresses */}
                  <div className="example-wrap">
                    <h4 className="example-title">Addresses</h4>
                    <p>Present contact information for the nearest ancestor or the entire
                      body of work. Preserve formatting by ending all lines with
                      <code>&lt;br&gt;</code>.</p>
                    <address>
                      <strong>Twitter, Inc.</strong>
                      <br/> 795 Folsom Ave, Suite 600
                      <br/> San Francisco, CA 94107
                      <br/>
                      <abbr title="Phone">P:</abbr> (123) 456-7890
                    </address>
                    <address>
                      <strong>Full Name</strong>
                      <br/>
                      <a href="mailto:#">first.last@example.com</a>
                    </address>
                  </div>
                  {/* End Example Addresses */}
                </div>
                <div className="col-xl-4 col-md-6">
                  {/* Example Lists - Unordered */}
                  <div className="example-wrap">
                    <h4 className="example-title">Lists - Unordered</h4>
                    <p>A list of items in which the order does not explicitly matter.</p>
                    <ul>
                      <li>Lorem ipsum dolor sit amet</li>
                      <li>Nulla volutpat aliquam velit
                        <ul>
                          <li>Phasellus iaculis neque</li>
                          <li>Purus sodales ultricies</li>
                          <li>Vestibulum laoreet porttitor sem</li>
                        </ul>
                      </li>
                      <li>Faucibus porta lacus fringilla vel</li>
                      <li>Aenean sit amet erat nunc</li>
                      <li>Eget porttitor lorem</li>
                    </ul>
                  </div>
                  {/* End Example Lists - Unordered */}
                </div>
                <div className="col-xl-4 col-md-6">
                  {/* Example Lists - Ordered */}
                  <div className="example-wrap">
                    <h4 className="example-title">Lists - Ordered</h4>
                    <p>A list of items in which the order does explicitly matter.</p>
                    <ol>
                      <li>Lorem ipsum dolor sit amet</li>
                      <li>Nulla volutpat aliquam velit
                        <ol>
                          <li>Phasellus iaculis neque</li>
                          <li>Purus sodales ultricies</li>
                          <li>Vestibulum laoreet porttitor sem</li>
                        </ol>
                      </li>
                      <li>Faucibus porta lacus fringilla vel</li>
                      <li>Aenean sit amet erat nunc</li>
                      <li>Eget porttitor lorem</li>
                    </ol>
                  </div>
                  {/* End Example Lists - Ordered */}
                </div>
                <div className="col-xl-4 col-md-6">
                  {/* Example Lists - Unstyled */}
                  <div className="example-wrap">
                    <h4 className="example-title">Lists - Unstyled</h4>
                    <p>Remove the default <code>list-style</code> and left margin on list
                      items (immediate children only).
                      <strong>This only applies to immediate children list items</strong>,
                      meaning you will need to add the class for any nested lists as
                      well.</p>
                    <ul className="list-unstyled">
                      <li>Lorem ipsum dolor sit amet</li>
                      <li>Nulla volutpat aliquam velit
                        <ul>
                          <li>Phasellus iaculis neque</li>
                          <li>Purus sodales ultricies</li>
                          <li>Vestibulum laoreet porttitor sem</li>
                        </ul>
                      </li>
                      <li>Faucibus porta lacus fringilla vel</li>
                      <li>Aenean sit amet erat nunc</li>
                      <li>Eget porttitor lorem</li>
                    </ul>
                  </div>
                  {/* End Example Lists - Unstyled */}
                </div>
                <div className="col-xl-4 col-md-6">
                  {/* Example Lists - Icons */}
                  <div className="example-wrap">
                    <h4 className="example-title">Lists - Icons</h4>
                    <p>A list of terms with icons.</p>
                    <ul className="list-icons">
                      <li><i className="wb-check" aria-hidden="true"/>Lorem ipsum dolor
                        sit amet
                      </li>
                      <li><i className="wb-check" aria-hidden="true"/>Nulla volutpat aliquam
                        velit
                        <ul>
                          <li>Phasellus iaculis neque</li>
                          <li>Purus sodales ultricies</li>
                        </ul>
                      </li>
                      <li><i className="wb-check" aria-hidden="true"/>Faucibus porta lacus
                        fringilla vel
                      </li>
                    </ul>
                  </div>
                  {/* End Example Lists - Icons */}
                </div>
                <div className="col-xl-4 col-md-6">
                  {/* Example Collapsible Submenu */}
                  <div className="example-wrap">
                    <h4 className="example-title">Collapsible Submenu</h4>
                    <p>A list of terms with icons.</p>
                    <ul className="list-icons">
                      <li><i className="wb-chevron-right-mini" aria-hidden="true"/>Lorem
                        ipsum dolor sit amet
                      </li>
                      <li><a data-toggle="collapse" href="#exampleSubmenu" aria-controls="exampleSubmenu"
                             aria-expanded="true"><i className="wb-chevron-right-mini" aria-hidden="true"/>Nulla
                        volutpat aliquam velit</a>
                        <ul className="collapse show" id="exampleSubmenu">
                          <li>Phasellus iaculis neque</li>
                          <li>Purus sodales ultricies</li>
                        </ul>
                      </li>
                      <li><i className="wb-chevron-right-mini" aria-hidden="true"/>Faucibus
                        porta lacus fringilla vel
                      </li>
                    </ul>
                  </div>
                  {/* End Example Collapsible Submenu */}
                </div>
                <div className="col-xl-4 col-md-6">
                  {/* Example Lists - Inline */}
                  <div className="example-wrap">
                    <h4 className="example-title">Lists - Inline</h4>
                    <p>Place all list items on a single line with <code>display: inline-block;</code> and some light
                      padding.</p>
                    <ul className="list-inline">
                      <li className="list-inline-item">Lorem ipsum</li>
                      <li className="list-inline-item">Phasellus iaculis</li>
                      <li className="list-inline-item">Nulla volutpat</li>
                    </ul>
                  </div>
                  {/* End Example Lists - Inline */}
                </div>
                <div className="col-xl-4 col-md-6">
                  {/* Example Description */}
                  <div className="example-wrap">
                    <h4 className="example-title">Description</h4>
                    <p>A list of terms with their associated descriptions.</p>
                    <dl>
                      <dt>Description lists</dt>
                      <dd>A description list is perfect for defining terms.</dd>
                      <dt>Euismod</dt>
                      <dd>Vestibulum id ligula porta felis euismod semper eget lacinia
                        odio.
                      </dd>
                      <dd>Donec id elit non mi porta gravida at eget metus.</dd>
                      <dt>Malesuada porta</dt>
                      <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
                    </dl>
                  </div>
                  {/* End Example Description */}
                </div>
                <div className="col-xl-8">
                  {/* Example Horizontal Description */}
                  <div className="example-wrap">
                    <h4 className="example-title">Horizontal Description</h4>
                    <p>Make terms and descriptions in <code>&lt;dl&gt;</code> line up
                      side-by-side. Starts off stacked like default <code>&lt;dl&gt;</code>s,
                      but when the navbar expands, so do these.</p>
                    <dl className="dl-horizontal row">
                      <dt className="col-sm-3">Description lists</dt>
                      <dd className="col-sm-9">A description list is perfect for defining terms.</dd>
                      <dt className="col-sm-3">Euismod</dt>
                      <dd className="col-sm-9">Vestibulum id ligula porta felis euismod semper eget lacinia
                        odio sem nec elit.
                      </dd>
                      <dd className="col-sm-9 offset-sm-3">Donec id elit non mi porta gravida.</dd>
                      <dt className="col-sm-3">Malesuada porta</dt>
                      <dd className="col-sm-9">Etiam porta sem malesuada magna mollis euismod.</dd>
                      <dt className="col-sm-3">Qui eiusmod magna.</dt>
                      <dd className="col-sm-9">Lorem ipsum In enim nostrud ut in mollit sint cillum laborum
                        ea quis qui.
                      </dd>
                    </dl>
                  </div>
                  {/* End Example Horizontal Description */}
                </div>
              </div>
              <div className="row row-lg">
                <div className="col-xl-12">
                  {/* Example Drop Cap */}
                  <div className="example-wrap">
                    <h4 className="example-title">Drop Cap</h4>
                    <p>Use the class <code>.drop-cap</code> let the first letter drop
                      down of content texts.</p>
                    <p>
                      <span className="drop-cap">L</span>ed cursus ante dapibus diam. Sed nisi. Nulla quis sem
                      at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.
                      Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum
                      lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora
                      torquent per conubia nostra, per inceptos himenaeos. Curabitur
                      sodales ligula in libero. Vestibulum lacinia arcu eget nulla.
                      Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                      per inceptos himenaeos. Curabitur sodales ligula in libero. Sed
                      dignissim lacinia nunc.sed cursus ante dapibus diam. Sed nisi.
                      Nulla quis sem at nibh elementum imperdiet.Sed dignissim lacinia
                      nunc.sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at
                      nibh elementum imperdiet.Vestibulum lacinia arcu eget nulla.
                      Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                      per inceptos himenaeos. Curabitur sodales ligula in libero. Sed
                      dignissim lacinia nunc.sed cursus ante dapibus diam. Sed nisi.
                      Nulla quis sem at nibh elementum imperdiet.</p>
                    <p>
                      <span className="drop-cap drop-cap-reversed">L</span>ed cursus ante dapibus diam. Sed nisi. Nulla
                      quis sem
                      at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.
                      Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum
                      lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora
                      torquent per conubia nostra, per inceptos himenaeos. Curabitur
                      sodales ligula in libero. Sed dignissim lacinia nunc.sed cursus
                      ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum
                      imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus
                      sed augue semper porta. Mauris massa. Vestibulum lacinia arcu
                      eget nulla. Class aptent taciti sociosqu ad litora torquent per
                      conubia nostra, per inceptos himenaeos. Curabitur sodales ligula
                      in libero. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus
                      sed augue semper porta. Mauris massa.Vestibulum lacinia arcu
                      eget nulla. Class aptent taciti sociosqu ad litora torquent per
                      conubia nostra, per inceptos himenaeos. Curabitur sodales ligula
                      in libero. Sed dignissim lacinia nunc.sed cursus ante dapibus
                      diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                    </p>
                  </div>
                  {/* End Example Drop Cap */}
                </div>
              </div>
            </div>
          </div>
          {/* End Panel */}
        </div>
      </div>
    );
  }
}

export default TypographyExample;
