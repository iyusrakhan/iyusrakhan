#  Customer Lifetime Value (CLV) Prediction Pipeline

##  Live Project Report & Visualization

*View the full, interactive website report here:* [(https://iyusrakhan.github.io/iyusrakhan/)]

---

##  Project Summary

This report outlines the design of a complete, end-to-end Big Data Analytics and Machine Learning pipeline for predicting *Customer Lifetime Value (CLV)* in the Retail industry. The project uses large-scale transactional data to forecast the future revenue a customer will generate.

The primary goal is to provide the business with an accurate CLV score per customer, allowing them to:
* Optimize *marketing spend* by targeting high-value customers.
* Implement *proactive retention* strategies for at-risk, high-value clients.
* Improve overall resource allocation and profitability.

##  Methodology and Architecture

### *Core Problem & Data*

* *Problem Type:* *Regression* (Predicting a continuous monetary value).
* *Dataset:* Online Retail II (over 1 million transaction records).
* *Data Characteristics:* Structured, time-series data with a highly *right-skewed/imbalanced* target variable (CLV).

### *Pipeline Design*

The architecture is built for scalability and efficiency, utilizing distributed computing:

* *Data Ingestion & Processing:* *PySpark* (Apache Spark) handles large-scale cleaning (e.g., filtering missing IDs, cleaning quantities) and feature aggregation.
* *Feature Engineering:* Focuses on creating *RFM metrics* (Recency, Frequency, Monetary value) from the raw transaction history.
* *Storage:* Data Lake architecture using *HDFS/AWS S3* (raw data) and *Parquet* format (processed features).

### *Machine Learning & Evaluation*

* *Algorithm:* *XGBoost Regressor* was chosen because it performs optimally on structured data, handles non-linear relationships, and is robust to the data's inherent skewness.
* *Primary Evaluation Metric:* *RMSE* (Root Mean Squared Error). This is critical because it penalizes *large prediction errors* on high-value customers more heavily than simpler metrics like MAE, aligning directly with the financial objectives of the business.

---

## 🛠️ Key Technologies Used

* *Big Data Framework:* PySpark (Apache Spark)
* *Modeling:* XGBoost, Scikit-learn
* *Data Persistence:* HDFS / AWS S3, Parquet Format
* *Visualization:* Tableau / Power BI
* *Deployment:* GitHub Pages
