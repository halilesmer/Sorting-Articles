import React, { useState, useEffect } from 'react';

function Articles({  sortedArticles }) {

  
console.log("sortedArticles: ", sortedArticles);

    return (
        <div className="card w-50 mx-auto">
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Upvotes</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedArticles && sortedArticles.map((article, index) => {
                        return (
                            <>
                                <tr data-testid="article" key={index}>
                                    <td  data-testid="article-title">{article.title}</td>
                                    <td data-testid="article-upvotes">{article.upvotes}</td>
                                    <td key={article.date} data-testid="article-date">{article.date}</td>
                                </tr>
                            </>
                        )


                    })}
                </tbody>
            </table>
        </div>
    );

}

export default Articles;
