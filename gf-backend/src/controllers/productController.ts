import { Request, Response, NextFunction } from 'express';
import Product from '../models/Product';

export const createProduct = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    next(error);
  }
};

export const getAllProducts = async (_req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    next(error);
  }
};

export const updateProduct = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!product) {
      res.status(404).json({ msg: 'Produto não encontrado' });
      return;
    }
    res.json(product);
  } catch (error) {
    next(error);
  }
};

export const deleteProduct = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      res.status(404).json({ msg: 'Produto não encontrado' });
      return;
    }
    res.json({ msg: 'Produto excluído' });
  } catch (error) {
    next(error);
  }
};
