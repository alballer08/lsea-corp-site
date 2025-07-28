<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>XML Sitemap - LS Engineering Associates Corporation</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <style type="text/css">
          body {
            font-family: 'Montserrat', sans-serif;
            font-size: 14px;
            line-height: 1.6;
            margin: 0;
            padding: 20px;
            background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
            min-height: 100vh;
            color: #333;
          }
          
          .container {
            max-width: 1200px;
            margin: 0 auto;
            background: white;
            border-radius: 12px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
            overflow: hidden;
          }
          
          .header {
            background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
            color: white;
            padding: 40px 30px;
            text-align: center;
          }
          
          .header h1 {
            margin: 0 0 10px 0;
            font-size: 2.5em;
            font-weight: 700;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          }
          
          .header p {
            margin: 0;
            font-size: 1.1em;
            opacity: 0.9;
          }
          
          .info-section {
            background: #f8fafc;
            padding: 30px;
            border-bottom: 1px solid #e2e8f0;
          }
          
          .info-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin-bottom: 20px;
          }
          
          .info-card {
            background: white;
            padding: 20px;
            border-radius: 8px;
            border-left: 4px solid #3b82f6;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
          }
          
          .info-card h3 {
            margin: 0 0 10px 0;
            color: #1e40af;
            font-size: 1.1em;
            font-weight: 600;
          }
          
          .info-card p {
            margin: 0;
            color: #64748b;
          }
          
          .content {
            padding: 30px;
          }
          
          table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
            background: white;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
          }
          
          th {
            background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
            color: white;
            padding: 15px 12px;
            text-align: left;
            font-weight: 600;
            font-size: 0.9em;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          
          td {
            padding: 12px;
            border-bottom: 1px solid #e2e8f0;
            vertical-align: top;
          }
          
          tr:hover {
            background-color: #f8fafc;
            transform: translateY(-1px);
            transition: all 0.2s ease;
          }
          
          .url {
            color: #3b82f6;
            text-decoration: none;
            font-weight: 500;
            transition: color 0.2s ease;
          }
          
          .url:hover {
            color: #1e40af;
            text-decoration: underline;
          }
          
          .priority {
            font-weight: 600;
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 0.85em;
          }
          
          .priority-high {
            background: #dcfce7;
            color: #166534;
          }
          
          .priority-medium {
            background: #fef3c7;
            color: #92400e;
          }
          
          .priority-low {
            background: #fee2e2;
            color: #991b1b;
          }
          
          .changefreq {
            background: #ede9fe;
            color: #5b21b6;
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 0.85em;
            font-weight: 500;
          }
          
          .lastmod {
            color: #64748b;
            font-family: 'Courier New', monospace;
            font-size: 0.9em;
          }
          
          .footer {
            background: #f8fafc;
            padding: 20px 30px;
            text-align: center;
            border-top: 1px solid #e2e8f0;
            color: #64748b;
            font-size: 0.9em;
          }
          
          @media (max-width: 768px) {
            body {
              padding: 10px;
            }
            
            .header {
              padding: 30px 20px;
            }
            
            .header h1 {
              font-size: 2em;
            }
            
            .content, .info-section {
              padding: 20px;
            }
            
            table {
              font-size: 0.9em;
            }
            
            th, td {
              padding: 8px 6px;
            }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>XML Sitemap</h1>
            <p>LS Engineering Associates Corporation</p>
          </div>
          
          <div class="info-section">
            <div class="info-grid">
              <div class="info-card">
                <h3>Total URLs</h3>
                <p><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/> pages indexed</p>
              </div>
              <div class="info-card">
                <h3>Last Updated</h3>
                <p>July 25, 2024</p>
              </div>
              <div class="info-card">
                <h3>XML Sitemap</h3>
                <p>This sitemap helps search engines discover and index your content</p>
              </div>
            </div>
          </div>
          
          <div class="content">
            <table>
              <thead>
                <tr>
                  <th>URL</th>
                  <th>Last Modified</th>
                  <th>Change Frequency</th>
                  <th>Priority</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="sitemap:urlset/sitemap:url">
                  <tr>
                    <td>
                      <a href="{sitemap:loc}" class="url">
                        <xsl:value-of select="sitemap:loc"/>
                      </a>
                    </td>
                    <td class="lastmod">
                      <xsl:value-of select="sitemap:lastmod"/>
                    </td>
                    <td>
                      <span class="changefreq">
                        <xsl:value-of select="sitemap:changefreq"/>
                      </span>
                    </td>
                    <td>
                      <xsl:variable name="priority" select="sitemap:priority"/>
                      <span>
                        <xsl:attribute name="class">
                          priority
                          <xsl:choose>
                            <xsl:when test="$priority &gt;= 0.8"> priority-high</xsl:when>
                            <xsl:when test="$priority &gt;= 0.6"> priority-medium</xsl:when>
                            <xsl:otherwise> priority-low</xsl:otherwise>
                          </xsl:choose>
                        </xsl:attribute>
                        <xsl:value-of select="$priority"/>
                      </span>
                    </td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </div>
          
          <div class="footer">
            <p>Generated XML Sitemap for LS Engineering Associates Corporation | <a href="https://lseacorp.com" class="url">Visit Website</a></p>
          </div>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>