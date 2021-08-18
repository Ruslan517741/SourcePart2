const pictureSize = (imgSelector) => {
    const blocks = document.querySelectorAll(imgSelector);

    function showImg (block) {
        const img = block.querySelector('img');
        img.src = img.src.slice(0, -4) + '-1.png';
        block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
            p.style.display = 'none';
        });
    }

    function hideImg (block) {
        const img = block.querySelector('img');
        img.src = img.src.slice(0, -6) + '.png';
        block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
            p.style.display = 'block';
        });
    }

    blocks.forEach(block => {
        block.addEventListener('mouseover', () => {
            showImg(block);
        });
        block.addEventListener('mouseout', () => {
            hideImg(block);
        });
    });
};

export default pictureSize;

/* const pictureSize = () => {
    const sizeBlocks = document.querySelectorAll('.sizes-block'),
          hitBlock = document.querySelector('.sizes-hit');

    sizeBlocks.forEach(block => {
        block.addEventListener('mouseover', (e) => {
            console.log(e.target);
            e.target.closest('.sizes-block').querySelectorAll('p').forEach(elem => {
                elem.style.display = 'none';
                hitBlock.style.display = 'block';
            });
            if (e.target.getAttribute('src')) {
                e.target.setAttribute('src', e.target.getAttribute('src').replace(/\.png/, '-1.png'));
                console.log(e.target.getAttribute('src'));
            }
        });
        block.addEventListener('mouseout', (e) => {
            console.log(e.target);
            e.target.closest('.sizes-block').querySelectorAll('p').forEach(elem => {
                elem.style.display = 'block';
            });
            if (e.target.getAttribute('src')) {
                e.target.setAttribute('src', e.target.getAttribute('src').replace(/-1.png/, '.png'));
                console.log(e.target.getAttribute('src'));
            }
        });
    });

};

export default pictureSize; */
