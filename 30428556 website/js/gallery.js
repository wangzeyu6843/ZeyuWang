document.addEventListener('DOMContentLoaded', function() {
    const carouselContainers = document.querySelectorAll('.carousel-container');

    carouselContainers.forEach(container => {
        const carouselItems = container.querySelectorAll('.carousel-item');
        const carouselPrev = container.querySelector('.carousel-prev');
        const carouselNext = container.querySelector('.carousel-next');
        let currentIndex = 0;

        function showSlide(index) {
            carouselItems.forEach((item, i) => {
                item.style.display = i === index ? 'block' : 'none';
            });
        }
		

        carouselPrev.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
            showSlide(currentIndex);
        });

        carouselNext.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % carouselItems.length;
            showSlide(currentIndex);
        });

        
         const interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % carouselItems.length;
             showSlide(currentIndex);
         }, 10000); 

        
        container.addEventListener('mouseover', () => {
            clearInterval(interval);
        });

        container.addEventListener('mouseout', () => {
            interval = setInterval(() => {
                currentIndex = (currentIndex + 1) % carouselItems.length;
                showSlide(currentIndex);
            }, 6000);
        });
    });
}); 

/* Adapted from the tutorial slide show
https://blog.csdn.net/weixin_35749796/article/details/142710142?ops_request_misc=&request_id=&biz_id=102&utm_term=%E7%BD%91%E9%A1%B5%E7%94%BB%E5%BB%8A%E5%9B%BE%E7%89%87%E8%BD%AE%E6%92%AD&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduweb~default-0-142710142.142^v100^pc_search_result_base6&spm=1018.2226.3001.4187 */