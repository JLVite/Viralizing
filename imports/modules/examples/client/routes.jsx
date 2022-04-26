import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Examples from '../ui/layouts/examples';
import Index from '../ui/layouts/index';
import Dashboard from '../ui/layouts/dashboard';
import Ecommerce from '../ui/layouts/ecommerce';
import Analytics from '../ui/layouts/analytics';
import Team from '../ui/layouts/team';

import Pages from '../ui/layouts/pages';
import UiKit from '../ui/layouts/ui-kit';
import Structure from '../ui/layouts/structure';
import Advanced from '../ui/layouts/advanced';
import Widgets from '../ui/layouts/widgets';
import Forms from '../ui/layouts/forms';
import Tables from '../ui/layouts/tables';
import Charts from '../ui/layouts/charts';

/*
* Advanced Imports 55 1153 0984
* */
import AlertifyExample from '../ui/components/advanced/alertify';
import AnimationExample from '../ui/components/advanced/animation';
import SweetalertExample from '../ui/components/advanced/bootbox-sweetalert';
import ChardinExample from '../ui/components/advanced/chardin';
import ContextMenuExample from '../ui/components/advanced/context-menu';
import HighlightExample from '../ui/components/advanced/highlight';
import LightboxExample from '../ui/components/advanced/lightbox';
import MapsVectorExample from '../ui/components/advanced/maps-vector';
import MasonryExample from '../ui/components/advanced/masonry';
import RatingExample from '../ui/components/advanced/rating';
import ScrollableExample from '../ui/components/advanced/scrollable';
import SortableNestedExample from '../ui/components/advanced/sortable-nestable';
import ToastrExample from '../ui/components/advanced/toastr';
import TreeViewExample from '../ui/components/advanced/treeview';

/*
* Charts Import
* */
import C3Example from '../ui/components/charts/c3';
import ChartistExample from '../ui/components/charts/chartist';
import ChartJSExample from '../ui/components/charts/chartjs';
import GaugesExample from '../ui/components/charts/gauges';
import HighchartsExample from '../ui/components/charts/highcharts';
import MorrisExample from '../ui/components/charts/morris';
import PeityExample from '../ui/components/charts/peity';
import PieProgressExample from '../ui/components/charts/pie-progress';
import RickshawExample from '../ui/components/charts/rickshaw';
import SparklineExample from '../ui/components/charts/sparkline';

/*
* Forms Progress
* */
import AdvancedExample from '../ui/components/forms/advanced';
import EditorAceExample from '../ui/components/forms/editor-ace';
import EditorMarkdownExample from '../ui/components/forms/editor-markdown';
import EditorSummernoteExample from '../ui/components/forms/editor-summernote';
import FileUploadsExample from '../ui/components/forms/file-uploads';
import GeneralExample from '../ui/components/forms/general';
import ImageCroppingExample from '../ui/components/forms/image-cropping';
import LayoutsExample from '../ui/components/forms/layouts';
import MasksExample from '../ui/components/forms/masks';
import MaterialExample from '../ui/components/forms/material';
import ValidationExample from '../ui/components/forms/validation';
import WizardExample from '../ui/components/forms/wizard';

/*
* Pages Imports
* */
import EmailExample from '../ui/components/pages/email';
import FaqExample from '../ui/components/pages/faq';
import GalleryExample from '../ui/components/pages/gallery';
import GalleryGridExample from '../ui/components/pages/gallery-grid';
import InvoiceExample from '../ui/components/pages/invoice';
import ProfileExample from '../ui/components/pages/profile';
import SearchResultExample from '../ui/components/pages/search-result';
import SiteMapExample from '../ui/components/pages/site-map';
import UserListExample from '../ui/components/pages/user-list';

/*
* Structure Imports
* */
import AlertsExample from '../ui/components/structure/alerts';
import BlockquotesExample from '../ui/components/structure/blockquotes';
import BreadcrumbsExample from '../ui/components/structure/breadcrumbs';
import ChatExample from '../ui/components/structure/chat';
import CommentsExample from '../ui/components/structure/comments';
import CoverExample from '../ui/components/structure/cover';
import MediaExample from '../ui/components/structure/media';
import NavExample from '../ui/components/structure/nav';
import NavBarsExample from '../ui/components/structure/navbars';
import OverlayExample from '../ui/components/structure/overlay';
import PaginationExample from '../ui/components/structure/pagination';
import PricingTablesExample from '../ui/components/structure/pricing-tables';
import RibbonExample from '../ui/components/structure/ribbon';
import StepExample from '../ui/components/structure/step';
import TestimonialsExample from '../ui/components/structure/testimonials';
import TimelineExample from '../ui/components/structure/timeline';
import TimelineSimpleExample from '../ui/components/structure/timeline-simple';

/*
* Tables Imports
* */
import BasicExample from '../ui/components/tables/basic';
import BootstrapExample from '../ui/components/tables/bootstrap';
import DatatableExample from '../ui/components/tables/datatable';
import EditableExample from '../ui/components/tables/editable';
import FloatTheadExample from '../ui/components/tables/floatthead';
import FootableExample from '../ui/components/tables/footable';
import JSGridExample from '../ui/components/tables/jsgrid';
import ResponsiveExample from '../ui/components/tables/responsive';

/*
* UI Kit
* */
import ButtonsExample from '../ui/components/uikit/buttons';
import CardsExample from '../ui/components/uikit/cards';
import CarouselExample from '../ui/components/uikit/carousel';
import ColorsExample from '../ui/components/uikit/colors';
import DropdownsExample from '../ui/components/uikit/dropdowns';
import IconsExample from '../ui/components/uikit/icons';
import ImagesExample from '../ui/components/uikit/images';
import LabelsExample from '../ui/components/uikit/labels';
import ListExample from '../ui/components/uikit/list';
import ModalsExamples from '../ui/components/uikit/modals';
import PanelActionsExample from '../ui/components/uikit/panel-actions';
import PanelPortletsExample from '../ui/components/uikit/panel-portlets';
import PanelStructureExample from '../ui/components/uikit/panel-structure';
import ProgressBarsExample from '../ui/components/uikit/progress-bars';
import TabsAccordionsExample from '../ui/components/uikit/tabs-accordions';
import TooltipPopoverExample from '../ui/components/uikit/tooltip-popover';
import TypographyExample from '../ui/components/uikit/typography';
import UtilitiesExample from '../ui/components/uikit/utilities';

/*
* Widgets Import
* */
import BlogExample from '../ui/components/widgets/blog';
import ChartExample from '../ui/components/widgets/chart';
import DataExample from '../ui/components/widgets/data';
import SocialExample from '../ui/components/widgets/social';
import StatisticsExample from '../ui/components/widgets/statistics';
import WeatherExample from '../ui/components/widgets/weather';

const ExampleRoutes = (
  <Route path="examples" component={Examples}>
    <IndexRoute component={Index}/>
    <Route path="dashboard" component={Dashboard}/>
    <Route path="ecommerce" component={Ecommerce}/>
    <Route path="analytics" component={Analytics}/>
    <Route path="team" component={Team}/>

    <Route path="pages" component={Pages}>
      <Route path="email" component={EmailExample}/>
      <Route path="faq" component={FaqExample}/>
      <Route path="gallery-grid" component={GalleryGridExample}/>
      <Route path="gallery" component={GalleryExample}/>
      <Route path="invoice" component={InvoiceExample}/>
      <Route path="profile" component={ProfileExample}/>
      <Route path="search-result" component={SearchResultExample}/>
      <Route path="site-map" component={SiteMapExample}/>
      <Route path="user" component={UserListExample}/>
    </Route>

    <Route path="uikit" component={UiKit}>
      <Route path="buttons" component={ButtonsExample}/>
      <Route path="cards" component={CardsExample}/>
      <Route path="carousel" component={CarouselExample}/>
      <Route path="colors" component={ColorsExample}/>
      <Route path="dropdowns" component={DropdownsExample}/>
      <Route path="icons" component={IconsExample}/>
      <Route path="images" component={ImagesExample}/>
      <Route path="labels" component={LabelsExample}/>
      <Route path="list" component={ListExample}/>
      <Route path="modals" component={ModalsExamples}/>
      <Route path="panel-actions" component={PanelActionsExample}/>
      <Route path="panel-portlets" component={PanelPortletsExample}/>
      <Route path="panel-structure" component={PanelStructureExample}/>
      <Route path="progress-bars" component={ProgressBarsExample}/>
      <Route path="tabs-accordions" component={TabsAccordionsExample}/>
      <Route path="tooltip-popover" component={TooltipPopoverExample}/>
      <Route path="typography" component={TypographyExample}/>
      <Route path="utilities" component={UtilitiesExample}/>
    </Route>

    <Route path="structure" component={Structure}>
      <Route path="alerts" component={AlertsExample}/>
      <Route path="blockquotes" component={BlockquotesExample}/>
      <Route path="breadcrumbs" component={BreadcrumbsExample}/>
      <Route path="chat" component={ChatExample}/>
      <Route path="comments" component={CommentsExample}/>
      <Route path="cover" component={CoverExample}/>
      <Route path="media" component={MediaExample}/>
      <Route path="nav" component={NavExample}/>
      <Route path="navbars" component={NavBarsExample}/>
      <Route path="overlay" component={OverlayExample}/>
      <Route path="pagination" component={PaginationExample}/>
      <Route path="pricing-tables" component={PricingTablesExample}/>
      <Route path="ribbon" component={RibbonExample}/>
      <Route path="step" component={StepExample}/>
      <Route path="testimonials" component={TestimonialsExample}/>
      <Route path="timeline" component={TimelineExample}/>
      <Route path="timeline-simple" component={TimelineSimpleExample}/>
    </Route>

    <Route path="advanced" component={Advanced}>
      <Route path="alertify" component={AlertifyExample}/>
      <Route path="animation" component={AnimationExample}/>
      <Route path="bootbox-sweetalert" component={SweetalertExample}/>
      <Route path="chardin" component={ChardinExample}/>
      <Route path="context-menu" component={ContextMenuExample}/>
      <Route path="highlight" component={HighlightExample}/>
      <Route path="lightbox" component={LightboxExample}/>
      <Route path="maps-vector" component={MapsVectorExample}/>
      <Route path="masonry" component={MasonryExample}/>
      <Route path="rating" component={RatingExample}/>
      <Route path="scrollable" component={ScrollableExample}/>
      <Route path="sortable-nestable" component={SortableNestedExample}/>
      <Route path="toastr" component={ToastrExample}/>
      <Route path="treeview" component={TreeViewExample}/>
    </Route>

    <Route path="widgets" component={Widgets}>
      <Route path="blog" component={BlogExample}/>
      <Route path="chart" component={ChartExample}/>
      <Route path="data" component={DataExample}/>
      <Route path="social" component={SocialExample}/>
      <Route path="statistics" component={StatisticsExample}/>
      <Route path="weather" component={WeatherExample}/>
    </Route>

    <Route path="forms" component={Forms}>
      <Route path="advanced" component={AdvancedExample}/>
      <Route path="editor-ace" component={EditorAceExample}/>
      <Route path="editor-markdown" component={EditorMarkdownExample}/>
      <Route path="editor-summernote" component={EditorSummernoteExample}/>
      <Route path="file-uploads" component={FileUploadsExample}/>
      <Route path="general" component={GeneralExample}/>
      <Route path="image-cropping" component={ImageCroppingExample}/>
      <Route path="layouts" component={LayoutsExample}/>
      <Route path="masks" component={MasksExample}/>
      <Route path="material" component={MaterialExample}/>
      <Route path="validation" component={ValidationExample}/>
      <Route path="wizard" component={WizardExample}/>
    </Route>

    <Route path="tables" component={Tables}>
      <Route path="basic" component={BasicExample}/>
      <Route path="bootstrap" component={BootstrapExample}/>
      <Route path="datatable" component={DatatableExample}/>
      <Route path="editable" component={EditableExample}/>
      <Route path="floatthead" component={FloatTheadExample}/>
      <Route path="footable" component={FootableExample}/>
      <Route path="jsgrid" component={JSGridExample}/>
      <Route path="responsive" component={ResponsiveExample}/>
    </Route>

    <Route path="charts" component={Charts}>
      <Route path="c3" component={C3Example}/>
      <Route path="chartist" component={ChartistExample}/>
      <Route path="chartjs" component={ChartJSExample}/>
      <Route path="gauges" component={GaugesExample}/>
      <Route path="highcharts" component={HighchartsExample}/>
      <Route path="morris" component={MorrisExample}/>
      <Route path="peity" component={PeityExample}/>
      <Route path="pie-progress" component={PieProgressExample}/>
      <Route path="rickshaw" component={RickshawExample}/>
      <Route path="sparkline" component={SparklineExample}/>
    </Route>
  </Route>
);

export default ExampleRoutes;
