import express from 'express';
import { create } from './create.js';
import { getAll, getById, getByPublication } from './list.js';
import { deleteAll, deleteById, deletePublication } from './delete.js';
import { updateById } from './update.js';

export const router = express.Router();

router.post('/', create);
router.get('/', getAll);
router.get('/:id', getById);
router.get('/publication/:publication', getByPublication);
router.patch('/:id', updateById);
router.delete('/:id', deleteById);
router.delete('/publication/:publication', deletePublication);
router.delete('/', deleteAll);
