import React from 'react';
import './directory.styles.scss';
import MenuItem from '../../components/menu-item/menu-item.component'

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [{
        title: 'Apple',
        imageUrl: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-spacegray-select-202011?wid=892&hei=820&&qlt=80&.v=1603406905000',
        id: 1,
        size: '',
      },
      {
        title: 'Dell',
        imageUrl: 'https://i.dell.com/sites/csimages/Video_Imagery/all/latitude-9510-olympic.jpg',
        id: 2,
        size: '',
      },
      {
        title: 'HP',
        imageUrl: 'https://media.flixfacts.com/inpage/hp/pavilion/mauve_images/big4.jpg',
        id: 3,
        size: '',
      },
      {
        title: 'Toshiba',
        imageUrl: 'https://cdn.vatanbilgisayar.com/Upload/PRODUCT/toshiba/thumb/v2-74418_large.jpg',
        id: 4,
        size: 'large',
      },
      {
        title: 'Asus',
        imageUrl: 'https://static.bhphoto.com/images/images2500x2500/1572345160_1508643.jpg',
        id: 5,
        size: 'large',
      }]
    }
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({title, imageUrl, id, size}) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    )
  }
}

export default Directory;