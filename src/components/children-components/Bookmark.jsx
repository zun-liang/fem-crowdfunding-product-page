import { useState } from 'react'
import BookmarkIcon from '../../assets/images/icon-bookmark.svg'
import BookmarkedIcon from '../../assets/images/icon-bookmarked.svg'
import styled from 'styled-components'

const BookmarkContainer = styled.div`
    width: 10rem;
    height: 2.9rem;
    background-color: var(--light-gray);
    border-radius: 2rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
    &:hover {
        cursor: pointer;
    }
`
const BookmarkedContainer = styled(BookmarkContainer)`
    background-color: hsl(176, 50%, 90%);
`
const BookmarkImg = styled.img`
    width: 2.9rem;
    height: 2.9rem;
    &:hover {
        cursor: pointer;
    }
`
const BookmarkText = styled.p`
    color: var(--dark-gray);   
    font-size: .75rem;
    font-weight: 700;
`
const BookmarkedText = styled(BookmarkText)`
    color: var(--dark-cyan);
`
const Bookmark = ({screenWidth}) => {
    const [bookmarkToggler, setBookmarkToggler] = useState(false)
    const toggleBookmark = () => setBookmarkToggler(prev => !prev)
    return(
        <>
            {!bookmarkToggler && screenWidth <= 600
                ? <BookmarkImg src={BookmarkIcon} alt='icon bookmark' onClick={toggleBookmark}/>
                : bookmarkToggler && screenWidth <= 600 
                ? <BookmarkImg src={BookmarkedIcon} alt="icon bookmarked" onClick={toggleBookmark}/>
                : !bookmarkToggler && screenWidth > 600
                ? <BookmarkContainer onClick={toggleBookmark}>
                    <BookmarkImg src={BookmarkIcon} alt='icon bookmark' />
                    <BookmarkText>Bookmark</BookmarkText>
                </BookmarkContainer>
                : <BookmarkedContainer onClick={toggleBookmark}>
                    <BookmarkImg src={BookmarkedIcon} alt="icon bookmarked" />
                    <BookmarkedText>Bookmarked</BookmarkedText>
                </BookmarkedContainer>
            }
        </>
        
        
    )
}

export default Bookmark