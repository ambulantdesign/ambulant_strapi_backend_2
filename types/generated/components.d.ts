import type { Attribute, Schema } from '@strapi/strapi';

export interface LayoutLink extends Schema.Component {
  collectionName: 'components_layout_links';
  info: {
    description: '';
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    button: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>;
    label: Attribute.String;
    url: Attribute.String & Attribute.Required;
  };
}

export interface LayoutRichText extends Schema.Component {
  collectionName: 'components_layout_rich_texts';
  info: {
    displayName: 'Rich Text';
    icon: 'align-justify';
  };
  attributes: {
    marginalTxt: Attribute.RichText;
  };
}

export interface LinkComponentWeblink extends Schema.Component {
  collectionName: 'components_link_component_weblinks';
  info: {
    description: '';
    displayName: 'weblink';
    icon: 'link';
  };
  attributes: {
    button: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>;
    label: Attribute.String;
    url: Attribute.String & Attribute.Required;
  };
}

export interface MediaGallery extends Schema.Component {
  collectionName: 'components_media_galleries';
  info: {
    displayName: 'Gallery';
    icon: 'images';
  };
  attributes: {
    caption: Attribute.Text;
    images: Attribute.Media<'images', true> & Attribute.Required;
  };
}

export interface MediaSingleImage extends Schema.Component {
  collectionName: 'components_media_single_images';
  info: {
    description: '';
    displayName: 'SingleImage';
    icon: 'image';
  };
  attributes: {
    background: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    caption: Attribute.Text;
    image: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface MediaSliderImage extends Schema.Component {
  collectionName: 'components_media_slider_images';
  info: {
    displayName: 'SliderImage';
  };
  attributes: {
    image: Attribute.Media<'images'>;
  };
}

export interface MediaStreamingVideo extends Schema.Component {
  collectionName: 'components_media_streaming_videos';
  info: {
    description: '';
    displayName: 'StreamingVideo';
    icon: 'video';
  };
  attributes: {
    autoplay: Attribute.Boolean & Attribute.DefaultTo<false>;
    consent_message: Attribute.RichText;
    controls: Attribute.Boolean & Attribute.DefaultTo<true>;
    loop: Attribute.Boolean & Attribute.DefaultTo<false>;
    related: Attribute.Boolean & Attribute.DefaultTo<false>;
    show_fullscreen: Attribute.Boolean & Attribute.DefaultTo<true>;
    streamingPlatform: Attribute.Enumeration<['YouTube', 'Vimeo']> &
      Attribute.Required &
      Attribute.DefaultTo<'YouTube'>;
    url: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'https://www.youtube-nocookie.com/embed/'>;
    urlParams: Attribute.String;
    videoCaption: Attribute.String;
    videoId: Attribute.String;
  };
}

export interface MediaVideo extends Schema.Component {
  collectionName: 'components_media_videos';
  info: {
    description: '';
    displayName: 'Video';
    icon: 'video';
  };
  attributes: {
    addToSlider: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    file: Attribute.Media<'videos'> & Attribute.Required;
    title: Attribute.String;
  };
}

export interface PortfolioWorkAdditionalFields extends Schema.Component {
  collectionName: 'components_portfolio_work_additional_fields';
  info: {
    description: '';
    displayName: 'Work Additional Fields';
    icon: 'list-ol';
  };
  attributes: {
    city: Attribute.String;
    commissioner: Attribute.String;
    format: Attribute.String;
    info: Attribute.Text;
    ISBN: Attribute.String;
    medium: Attribute.String;
    publisher: Attribute.String;
    technical_details: Attribute.Text;
    year: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 4;
      }>;
    yearEnd: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 4;
      }>;
  };
}

export interface SeoSeoBasicFields extends Schema.Component {
  collectionName: 'components_seo_seo_basic_fields';
  info: {
    description: '';
    displayName: 'SeoBasicFields';
    icon: 'tags';
  };
  attributes: {
    seo_description: Attribute.Text &
      Attribute.DefaultTo<'Gabriele G\u00F6tz \u2013 studio ambulant design | Amsterdam (The Netherlands)'>;
    seo_image: Attribute.Media<'images'>;
    seo_title: Attribute.String;
  };
}

export interface SeoTwitter extends Schema.Component {
  collectionName: 'components_seo_twitters';
  info: {
    displayName: 'Twitter';
    icon: 'id-card';
  };
  attributes: {
    card_image: Attribute.Media<'images'>;
    description: Attribute.Text & Attribute.Required;
    lang: Attribute.String & Attribute.Required;
  };
}

export interface VideoVideos extends Schema.Component {
  collectionName: 'components_video_videos';
  info: {
    displayName: 'Videos';
    icon: 'video';
  };
  attributes: {
    videoCaption: Attribute.String;
    videoFile: Attribute.Media<'videos'> & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'layout.link': LayoutLink;
      'layout.rich-text': LayoutRichText;
      'link-component.weblink': LinkComponentWeblink;
      'media.gallery': MediaGallery;
      'media.single-image': MediaSingleImage;
      'media.slider-image': MediaSliderImage;
      'media.streaming-video': MediaStreamingVideo;
      'media.video': MediaVideo;
      'portfolio.work-additional-fields': PortfolioWorkAdditionalFields;
      'seo.seo-basic-fields': SeoSeoBasicFields;
      'seo.twitter': SeoTwitter;
      'video.videos': VideoVideos;
    }
  }
}
