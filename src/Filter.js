import React from 'react'; 

const Filter = ({setFilterTitle, setFilterRating}) => {
  return (
    <div style={{ margin: '20px 0', display: 'flex', gap: '10px' }}>
      <input 
        type="text" 
        placeholder="Filter by title" 
        onChange={(e) => setFilterTitle(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Filter by rating" 
        onChange={(e) => setFilterRating(Number(e.target.value))} 
      />
    </div>
  );
};

export default Filter;
// This component is used to filter the list of movies based on title and rating.