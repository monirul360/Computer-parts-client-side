
const ReviewRow = ({ review }) => {

    const reviewritng = review?.ratings;

    const sortdes = review?.description.slice(0, 100);

    return (
        <div class="m-3">

            <div class="mb-6 lg:mb-0">
                <div
                    class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                    <div class="relative overflow-hidden bg-cover bg-no-repeat">
                        <img style={{ "width": "100%", "height": "260px" }} src={review?.image} class="w-full rounded-t-lg" />
                        <a href="#!">
                            <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"></div>
                        </a>
                        <svg class="absolute left-0 bottom-0 text-white dark:text-neutral-700" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1440 320">
                            <path fill="currentColor"
                                d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                            </path>
                        </svg>
                    </div>
                    <div class="p-6">
                        <h5 class="mb-2 text-lg font-bold">{review?.name}</h5>
                        <h6 class="mb-4 font-medium text-primary dark:text-primary-400">
                            {review?.Specialist}
                        </h6>
                        <ul class="mb-6 flex justify-center">

                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                                    <path fill="currentColor"
                                        d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                </svg>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                                    <path fill="currentColor"
                                        d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                </svg>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                                    <path fill="currentColor"
                                        d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                </svg>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                                    <path fill="currentColor"
                                        d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                </svg>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                                    <path fill="currentColor"
                                        d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                </svg>
                            </li>


                        </ul>
                        <p>
                            {sortdes}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewRow;