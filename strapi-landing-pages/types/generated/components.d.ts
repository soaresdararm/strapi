import type { Schema, Attribute } from '@strapi/strapi';

export interface SectionImgGrid extends Schema.Component {
  collectionName: 'components_section_img_grids';
  info: {
    displayName: 'img-grid';
    icon: 'picture';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
  };
}

export interface SectionSectionGrid extends Schema.Component {
  collectionName: 'components_section_section_grids';
  info: {
    displayName: 'section_grid';
    icon: 'grid';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    text_grid: Attribute.Component<'section.text-grid', true>;
    image_grid: Attribute.Component<'section.img-grid', true>;
    metadata: Attribute.Component<'section.section-metadata'>;
  };
}

export interface SectionSectionMetadata extends Schema.Component {
  collectionName: 'components_section_section_metadata';
  info: {
    displayName: 'section_metadata';
    icon: 'archive';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    section_id: Attribute.String & Attribute.Required;
    background: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

export interface SectionSectionTwoColumns extends Schema.Component {
  collectionName: 'components_section_section_two_columns';
  info: {
    displayName: 'section_two_columns';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
    metadata: Attribute.Component<'section.section-metadata'> &
      Attribute.Required;
  };
}

export interface SectionTextGrid extends Schema.Component {
  collectionName: 'components_section_text_grids';
  info: {
    displayName: 'text-grid';
    icon: 'apps';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'section.img-grid': SectionImgGrid;
      'section.section-grid': SectionSectionGrid;
      'section.section-metadata': SectionSectionMetadata;
      'section.section-two-columns': SectionSectionTwoColumns;
      'section.text-grid': SectionTextGrid;
    }
  }
}
