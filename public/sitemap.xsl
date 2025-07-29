<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>LSEA - Sitemap XML</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <style type="text/css">
          body {
            font-family: system-ui, -apple-system, sans-serif;
            font-size: 14px;
            line-height: 1.5;
            margin: 0;
            padding: 40px;
            background: #fafafa;
            color: #333;
          }
          
          .container {
            max-width: 1000px;
            margin: 0 auto;
            background: white;
            border: 1px solid #e0e0e0;
          }
          
          .header {
            background: #f5f5f5;
            padding: 30px;
            border-bottom: 1px solid #e0e0e0;
          }
          
          .header h1 {
            margin: 0 0 8px 0;
            font-size: 24px;
            font-weight: 600;
            color: #333;
          }
          
          .header p {
            margin: 0;
            color: #666;
            font-size: 14px;
          }
          
          .info {
            padding: 20px 30px;
            background: #fafafa;
            border-bottom: 1px solid #e0e0e0;
            font-size: 13px;
            color: #666;
          }
          
          .content {
            padding: 0;
          }
          
          table {
            width: 100%;
            border-collapse: collapse;
          }
          
          th {
            background: #f0f0f0;
            padding: 12px 15px;
            text-align: left;
            font-weight: 600;
            font-size: 13px;
            color: #333;
            border-bottom: 1px solid #e0e0e0;
          }
          
          td {
            padding: 10px 15px;
            border-bottom: 1px solid #f0f0f0;
            font-size: 13px;
          }
          
          tr:hover {
            background-color: #fafafa;
          }
          
          .url {
            color: #0066cc;
            text-decoration: none;
          }
          
          .url:hover {
            text-decoration: underline;
          }
          
          .priority {
            font-weight: 600;
          }
          
          .priority-high {
            color: #0066cc;
          }
          
          .priority-medium {
            color: #666;
          }
          
          .priority-low {
            color: #999;
          }
          
          .changefreq {
            color: #666;
            font-size: 12px;
          }
          
          .lastmod {
            color: #999;
            font-family: monospace;
            font-size: 12px;
          }
          
          .footer {
            padding: 20px 30px;
            border-top: 1px solid #e0e0e0;
            color: #666;
            font-size: 12px;
            text-align: center;
          }
          
          @media (max-width: 768px) {
            body {
              padding: 20px;
            }
            
            .header, .info, .footer {
              padding: 20px;
            }
            
            th, td {
              padding: 8px 10px;
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
          
          <div class="info">
            <strong><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></strong> URLs found in this sitemap. Last updated: July 25, 2024
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