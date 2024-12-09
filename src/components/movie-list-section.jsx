/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Movies from "../data/movies";
import MovieDetail from './movie-detail';


function MovieList() {
    return (
        <div css={css`
            width: 1000px;
            display: flex;
            flex-direction: column;
            align-items: center;

            background-color: #FFFFFF;
            color: #111111;
        `}>
            <div css={css`
                font-family: 'Kanit', sans-serif;
                font-size: 40px;
                font-weight: 600;
                padding: 70px 0px 70px 0px;
                line-height: 18px;
            `}>
                Movie List Section
            </div>

            {
                Movies.map((item, index) => {
                    if ( item.title === "Assassin's Creed" || item.title === "Luke Cage") {
                        return (
                            <div key={index} css={css`
                                width: auto;
                                min-width: 400px;
                                height: 250px;
                                border-radius: 10px;
                                background-color: #FFFFFF;
                                box-shadow: 0px 4px 40px 0px #917C7C40;
                                display: flex;
                                flex-direction: row;
                                margin: 40px 0px 40px 0px;
                                display: inline-flex;
                            `}>
                                <div css={css`
                                    width: 102px;
                                    height: 100px;
                                    overflow: hidden;
                                    padding: 14px;
                                    border-radius: 10px;
                                    margin-right: 20px;
                                `}>
                                    <img src={item.image} alt="Cover image of Assassin's Creed movie" role="img" aria-label="Cover image of Assassin's Creed movie" css={css`
                                        width: 100%;
                                        height: 100%;
                                        object-fit: cover;
                                        border-radius: 10px;
                                    `} />
                                </div>
                                <div css={css`
                                    flex: 1;
                                    `}>
                                    <ul css={css`
                                        list-style-type: none;
                                        display: flex;
                                        flex-direction: column;
                                        align-items: flex-start;
                                        gap: 20px;
                                        margin: 0px;
                                        padding: 14px 0px 0px 0px;
                                        font-family: 'Kanit', sans-serif;
                                        font-size: 20px;
                                        font-weight: 400;
                                        line-height: 18px;
                                        text-align: left;

                                        `}>
                                            <MovieDetail item={item} />
                            
                                    </ul>
                    
                                </div>          
                            </div>
                        );
                    } else {
                        return null;
                    }
                })

                }
            </div>
    )
}

export default MovieList;