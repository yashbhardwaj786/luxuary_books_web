function LeftBook({ ismobile = false }) {
  return (
    <>
      {ismobile ? (
        <svg opacity={0.1} width="77" height="69" viewBox="0 0 77 69" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M71.4099 21.1102C71.1025 18.4479 71.0592 13.8626 73.205 12.323C73.2434 12.2947 73.2719 12.254 73.3055 12.2189C75.0598 11.5723 76.2739 10.6649 75.3209 9.44382L49.4419 0.458252L7.53786 7.17182C7.53786 7.17182 2.73933 7.96217 3.16799 16.5531C3.40069 21.2288 4.6733 23.5251 5.78624 24.6553L2.34763 25.8494C1.39323 27.0705 2.6071 27.9782 4.36167 28.6238C4.39501 28.6598 4.42313 28.7003 4.46214 28.7286C6.6066 30.2695 6.56532 34.8543 6.25686 37.5171C-1.44706 40.0379 1.31839 40.8593 1.31839 40.8593L3.00832 41.3306C1.81963 42.5684 0.639101 44.9157 0.860237 49.3674C1.28913 57.9568 5.23056 58.5495 5.23056 58.5495L32.6523 68.8205L74.0422 57.2678C74.0422 57.2678 76.8085 56.445 69.1026 53.924C68.7927 51.2654 68.7496 46.6811 70.8991 45.1362C70.9386 45.1088 70.9674 45.0672 70.9993 45.0327C72.7539 44.3861 73.9669 43.4795 73.0136 42.2584L71.2146 41.6324C72.4144 40.7987 74.2166 38.6197 74.499 32.9597C74.6938 29.0665 73.8124 26.7864 72.7922 25.444L76.3481 24.4524C76.3483 24.454 79.1147 23.6312 71.4099 21.1102ZM36.7897 21.0001L43.7499 19.3517L67.2715 13.7816L70.7759 12.951C69.6562 15.3127 69.7031 18.5447 69.8884 20.6219C69.929 21.0919 69.9758 21.521 70.0211 21.8472L66.1854 22.9462L36.4971 31.4569L36.7897 21.0001ZM6.89146 29.3592L10.3954 30.1898L32.9846 35.5409L34.958 36.0067L40.8761 37.4083L41.168 47.8654L10.6549 39.1174L7.64673 38.2559C7.69096 37.9292 7.73768 37.5006 7.78009 37.0294C7.96426 34.9536 8.01211 31.7209 6.89146 29.3592ZM5.53017 16.1396C5.48776 13.8545 5.84113 12.202 6.55534 11.3619C7.00986 10.8256 7.54625 10.714 7.91413 10.714C8.10851 10.714 8.24845 10.7451 8.25797 10.7451L26.3133 17.5282L35.3214 20.9126L35.0259 31.4425L9.75466 23.2781L8.42104 22.8477C8.37205 22.8317 8.3056 22.8208 8.25434 22.8182C8.15024 22.8095 5.65174 22.5445 5.53017 16.1396ZM32.7176 64.2584L6.11352 55.6633C6.0643 55.6468 5.99853 55.6359 5.94727 55.633C5.84135 55.6249 3.34172 55.3601 3.22083 48.9568C3.17774 46.6689 3.53292 45.0178 4.24577 44.177C4.70143 43.6407 5.23805 43.5291 5.60525 43.5291C5.80007 43.5291 5.93956 43.5592 5.94977 43.5592L33.0114 53.7282L32.7176 64.2584ZM67.5789 53.4363C67.6208 53.9078 67.6676 54.3361 67.7129 54.6628L34.1883 64.2733L34.4813 53.8163L41.6486 52.1182L42.7071 52.4133L46.6744 50.9275L64.962 46.597L68.4677 45.7659C67.3469 48.1272 67.3933 51.3605 67.5789 53.4363ZM69.4255 39.2248C69.3645 39.2264 69.3035 39.2358 69.2461 39.2567L66.7177 40.0724L42.6427 47.8515L42.3483 37.3216L50.247 34.3528L69.3729 27.1651C69.3754 27.1638 70.379 26.9069 71.1157 27.7702C71.8288 28.6102 72.1826 30.2627 72.1409 32.5478C72.0161 38.9506 69.5165 39.2167 69.4255 39.2248Z" fill="#F0EFF4" />
        </svg>
      ) :
        (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="191"
            height="172"
            opacity={0.1}
            fill="none"
            viewBox="0 0 191 172"
          >
            <path
              fill="#F0EFF4"
              d="M177.262 51.87c-.772-6.687-.881-18.203 4.509-22.07.096-.071.168-.174.252-.262 4.406-1.624 7.456-3.903 5.062-6.97L122.087 0 16.839 16.862S4.787 18.847 5.864 40.424c.584 11.744 3.78 17.511 6.576 20.35l-8.637 3c-2.397 3.066.652 5.346 5.059 6.967.084.09.154.193.252.263 5.386 3.87 5.283 15.386 4.508 22.074-19.35 6.331-12.404 8.394-12.404 8.394l4.245 1.184c-2.986 3.109-5.95 9.004-5.395 20.186 1.077 21.573 10.976 23.062 10.976 23.062L79.917 171.7l103.956-29.016s6.948-2.066-12.406-8.398c-.778-6.677-.887-18.191 4.512-22.072.099-.068.172-.173.252-.259 4.407-1.625 7.453-3.902 5.059-6.969l-4.519-1.572c3.014-2.094 7.54-7.567 8.25-21.782.489-9.779-1.725-15.506-4.287-18.877l8.931-2.49c.001.003 6.949-2.063-12.403-8.395zm-86.953-.276l17.482-4.14 59.077-13.99 8.802-2.087c-2.813 5.932-2.695 14.05-2.229 19.267.102 1.18.219 2.258.333 3.077l-9.634 2.76-74.566 21.376.735-26.264zM15.216 72.588l8.8 2.087 56.736 13.44 4.957 1.17 14.863 3.52.734 26.264-76.638-21.972-7.555-2.163c.11-.82.228-1.897.335-3.081.462-5.213.582-13.333-2.232-19.264zm-3.42-33.202c-.106-5.74.782-9.89 2.575-12 1.142-1.347 2.49-1.627 3.413-1.627.489 0 .84.078.864.078l45.348 17.036 22.625 8.5-.742 26.448-63.472-20.506-3.35-1.081a1.786 1.786 0 00-.418-.074c-.262-.022-6.537-.688-6.842-16.774zm68.285 120.856l-66.82-21.587a1.755 1.755 0 00-.417-.077c-.266-.02-6.544-.685-6.848-16.768-.108-5.746.784-9.893 2.575-12.005 1.144-1.347 2.492-1.627 3.414-1.627.49 0 .84.076.866.076l67.968 25.54-.737 26.448zm87.559-27.181c.105 1.184.223 2.26.337 3.081L83.775 160.28l.736-26.265 18.002-4.264 2.658.741 9.965-3.732 45.931-10.877 8.805-2.087c-2.815 5.931-2.698 14.052-2.232 19.265zm4.638-35.694a1.43 1.43 0 00-.451.08l-6.35 2.049-60.468 19.538-.739-26.447 19.839-7.457 48.037-18.052c.006-.004 2.527-.649 4.377 1.52 1.791 2.11 2.68 6.26 2.575 11.999-.313 16.082-6.592 16.75-6.82 16.77z"
            ></path >
          </svg >
        )
      }
    </>

  );
}

export default LeftBook;