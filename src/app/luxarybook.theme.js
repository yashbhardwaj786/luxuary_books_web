import {memo} from 'react'
import {createGlobalStyle} from 'styled-components'

const Theme = createGlobalStyle`
    

    * {
    box-sizing: border-box;
    }

    .viewport-container {
      width: 100%;

      @media (min-width:768px) {
        max-width: 1120px;
      }
    }
    :root {
    --brand-font-family-title: 'Biggi Ol', sans-serif;
    --brand-font-family-text: 'Ubuntu', sans-serif;
    --brand-font-family: 'Ubuntu', sans-serif;
    --brand-font-default-color: rgba(0, 0, 0, 1);

    --brand-font-weight-light: 300;
    --brand-font-weight-400: 400;
    --brand-font-weight-normal: 400;
    --brand-font-weight-medium: 500;
    --brand-font-weight-semiBold: 600;
    --brand-font-weight-700: 700;
    --brand-font-weight-bold: 700;
    --brand-font-weight-heavy: 800;
    --brand-font-weight-black: 900;

   
    --brand-primary-orange-color: rgba(255, 109, 56, 1);
    --brand-primary-blue-color: rgba(88, 142, 206, 1);
  
    --checkout-modal-desc-bg-color: rgba(37, 64, 120, 0.05);
    --checkout-modal-desc-text-color: rgba(37, 64, 120, 1);
    --checkout-modal-title-text-color: rgba(215, 108, 108, 1);
    --checkout-modal-positive-btn-color: rgba(215, 108, 108, 1);
    --checkout-modal-negative-btn-color: rgba(128, 168, 87, 1);
    }

    [data-category='hair'], [data-category='hm'] {
    --category-primary-color-value: 81, 148, 209;
    --category-primary-color: #5194D1;
    --category-primary-dark-color: #1C3D74;
    --category-primary-bg1-color: #E1EFF8;
    --category-primary-bg2-color: #E1EFF8;
    --category-primary-bg3-color: #E1EFF8;
    }

    [data-category='beard'], [data-category='bm'] {
    --category-primary-color-value: 150, 122, 117;
    --category-primary-color: #967A75;
    --category-primary-dark-color: #735852;
    --category-primary-bg1-color: #F2ECEC;
    --category-primary-bg2-color: #F2ECEC;
    --category-primary-bg3-color: #F2ECEC;
    }

    [data-category='performance'], [data-category='pm'] {
    --category-primary-color-value: 212, 119, 152;
    --category-primary-color: #D47798;
    --category-primary-dark-color: #9E586A;
    --category-primary-bg1-color: #FAE9E9;
    --category-primary-bg2-color: #FAE9E9;
    --category-primary-bg3-color: #FAE9E9;
    }
    [data-category='skin'], [data-category='skm'] {
    --category-primary-color-value: 215, 115, 37;
    --category-primary-color: #D77325;
    --category-primary-dark-color: #9A521C;
    --category-primary-bg1-color: #FEF3EA;
    --category-primary-bg2-color: #FEF3EA;
    --category-primary-bg3-color: #FEF3EA;
  }
  
  [data-category='nutrition'], [data-category='nm'] {
      --category-primary-color-value: 91, 180, 127;
      --category-primary-color: #5BB47F;
      --category-primary-dark-color:#377D58;
      --category-primary-bg1-color: #E4F5ED;
      --category-primary-bg2-color: #E4F5ED;
      --category-primary-bg3-color: #E4F5ED;
    }
    
    [data-category='weight'], [data-category='wm'] {
    --category-primary-color-value: 128, 168, 87;
    --category-primary-color: #80A857;
    --category-primary-dark-color:#476F4C;
    --category-primary-bg1-color: #E4F5ED;
    --category-primary-bg2-color: #E4F5ED;
    --category-primary-bg3-color: #E4F5ED;
  }
  [data-category='hygiene'], [data-category='hym'], [data-category='body-care'] {
    --category-primary-color-value: 86, 166, 184;
    --category-primary-color: #56A6B8;
    --category-primary-dark-color: #357487;
    --category-primary-bg1-color: #DDEFEC;
    --category-primary-bg2-color: #DDEFEC;
    --category-primary-bg3-color: #DDEFEC;
  }
  
  [data-category='sleep'], [data-category='sm'] {
    --category-primary-color-value: 130, 117, 208;
    --category-primary-color: #8275D0;
    --category-primary-dark-color: #4D4CA1;
    --category-primary-bg1-color: #EFEAF8;
    --category-primary-bg2-color: #EFEAF8;
    --category-primary-bg3-color: #EFEAF8;
  }
  
  [data-category='brand'] {
    --category-primary-color-value: 81, 148, 209;
    --category-primary-color: #5194D1;
    --category-primary-dark-color: #1C3D74;
    --category-primary-bg1-color: #E1EFF8;
    --category-primary-bg2-color: #E1EFF8;
    --category-primary-bg3-color: #E1EFF8;
    }

  button {
  cursor: pointer;
  -webkit-appearance: none;
  }

  button:focus, button:active, button:target, button:visited{
  outline: 0;
  box-shadow: 2px 8px 12px 12px rgba(0,0,0,0.1)!important;
  }
    /*
      id="productFinder" for HP Product Page
      padding: 
    */
    #productFinder {
      padding-top: 0;
    }
    .rcl-hidden.rcl-hidden.rcl-hidden.rcl-hidden {
      display: none;
    }
    .rcl-product-card.rcl-product-card.rcl-product-card.rcl-product-card{
      .name {
      font-family: var(--brand-font-family);
      font-size: 12px;
      line-height: 14px;
      height: 28px;
      }

      .img-container,.img-hover {
        height: auto;
        aspect-ratio: 4/3;
      }


      @media screen and (min-width: 768px) {
        .product-info {
          padding: 0 20px;
        }
          .name {
          font-size: 24px;
          width: 290px;
          line-height: 24px;
          height: 48px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      }
    }
    .rcl-section-title{
        font-size: 18px;
        text-align: left;
        margin-left: 16px;
        margin-bottom: 10px;
        @media (min-width: 768px) {
          font-size: 36px;
          margin-left: 0;
          margin-bottom: 0;
      }
    }

    [data-page="product_page"] {
      [data-scrollsection="imageGallery"] {
        .image-gallery-image.image-gallery-image.image-gallery-image {
          aspect-ratio: revert;
          height: calc(100vw*3 / 4);
          object-fit: contain;


          @media screen and (min-width: 768px) {
            aspect-ratio: 4/3;
            height:revert;
          }
        }
      }
    }
`

export default memo(Theme)
