import React, { useState, useEffect } from 'react';
import { TextField, Typography, Container, Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import styled from 'styled-components';


const StyledCard = styled.div`
  flex: 1;
  min-width: 300px;
  max-width: 500px;
  padding: 20px 22px;
  border: 1px solid ${({ theme }) => theme.text_primary + 20};
  border-radius: 14px;
  box-shadow: 1px 6px 20px 0px ${({ theme }) => theme.primary + 15};
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: auto;
  @media (max-width: 600px) {
    padding: 16px 18px;
  }
`;

const SuggestionCard = styled(StyledCard)`
  min-width: 400px; /* Added minimum width */
  max-width: 600px; /* Added maximum width */
  min-height: 300px; /* Added minimum height */
`;

const PersonalFoods = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState(searchQuery);

  useEffect(() => {
  
    const handler = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 500); 

 
    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery]);

  useEffect(() => {
    const handleSearch = async () => {
      if (!debouncedSearchQuery.trim()) {
        setFoods([]);
        setSearched(false);
        return;
      }
      setLoading(true);
      setSearched(true);
      try {
        const response = await axios.get(`https://testing-435o.onrender.com/api/food/search?name=${debouncedSearchQuery}`);
        setFoods(response.data);
      } catch (error) {
        console.error('Error fetching data', error);
      }
      setLoading(false);
    };

    handleSearch();
  }, [debouncedSearchQuery]);

  return (
    <Container
      sx={{
        maxWidth: '100%',
        height: 'calc(100vh - 64px)',
        overflowY: 'scroll',
        padding: 2,
        scrollbarWidth: 'none',
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      }}
    >
      <Typography variant="h4" gutterBottom>
        Your Personal Foods
      </Typography>
      <Typography variant="h6" gutterBottom>
        Search your personal foods by name:
      </Typography>
      <Grid container spacing={2} alignItems="center" sx={{ marginBottom: 4 }}>
        <Grid item xs={12} md={8}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            InputProps={{
              endAdornment: <SearchIcon color="action" />,
            }}
          />
        </Grid>
      </Grid>
      {searched && (
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }} marginBottom={4}>
          Matching Foods:
        </Typography>
      )}
      {loading ? (
        <Typography>Loading...</Typography>
      ) : searched && foods.length ? (
        <Grid container spacing={2}>
          {foods.map((food) => (
            <Grid item xs={12} sm={6} md={4} key={food._id}>
              <StyledCard>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  {food.name}
                </Typography>
                <Grid container spacing={2} marginTop={0.2}>
                  <Grid item xs={6}>
                    <Typography>Calories: {food.calories}</Typography>
                    <Typography>Protein: {food.protein}g</Typography>
                  </Grid>
                  <Grid item xs={6} style={{ textAlign: 'right' }}>
                    <Typography>Carbs: {food.carbs}g</Typography>
                    <Typography>Fat: {food.fat}g</Typography>
                  </Grid>
                </Grid>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      ) : searched && !foods.length ? (
        <Grid container spacing={2}>
          <Grid item xs={12} sm={8} md={6} lg={4}>
            <SuggestionCard>
              <Typography variant="h6" sx={{ marginBottom: 2 }}>
                No results found.
              </Typography>
              <Typography sx={{ marginBottom: 2 }}>Suggestions:</Typography>
              <ul>
                <li>Make sure all words are spelled correctly.</li>
                <li>Search by ingredient.</li>
                <li>Try more general keywords like 'apple'.</li>
              </ul>
            </SuggestionCard>
          </Grid>
        </Grid>
      ) : !searchQuery.trim() && (
        <Grid container spacing={2}>
          <Grid item xs={12} sm={8} md={6} lg={4}>
            <SuggestionCard>
              <Typography variant="h6" sx={{ marginBottom: 2 }}>
                There are no results for your search.
              </Typography>
              <Typography sx={{ marginBottom: 2 }}>Suggestions:</Typography>
              <ul>
                <li style={{ marginTop: '6px' }}>Make sure all words are spelled correctly.</li>
                <li style={{ marginTop: '6px' }}>Search by ingredient.</li>
                <li style={{ marginTop: '6px' }}>Try more general keywords like 'apple'.</li>
              </ul>
            </SuggestionCard>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default PersonalFoods;
