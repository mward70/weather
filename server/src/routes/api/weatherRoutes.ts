import { Router } from 'express';
const router = Router();
import HistoryService from '../../service/historyService.js';
import WeatherService from '../../service/weatherService.js';

// TODO: POST Request with city name to retrieve weather data
router.post('/', (req, res) => {
  try {
    // TODO: GET weather data from city name
    const { city } = req.body;

  }
  const weatherData = await WeatherService.getWeather(city);
  // TODO: save city to search history
  await HistoryService.addCity(city);
  res.status(200).json(weatherData);
}catch (error) {
  console.error('Could not GET weather.', error);
  res.status(500).json({ error: 'Could not GET weather data.' });
});

// TODO: GET search history
router.get('/history', async (req, res) => {
  try {
    const history = await HistoryService.getHistory();
    res.status(200).json(history)
  } catch (error) {
    console.error('Could not GET search history', error);
    res.status(500).json({ error: 'Could not GET search history' });
  }
});

// * BONUS TODO: DELETE city from search history
router.delete('/history/:id', async (req, res) => { });

export default router;
