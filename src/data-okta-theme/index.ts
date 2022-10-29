// https://www.terraform.io/docs/providers/okta/d/theme
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOktaThemeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Brand ID
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/theme#brand_id DataOktaTheme#brand_id}
  */
  readonly brandId: string;
  /**
  * Theme ID
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/theme#theme_id DataOktaTheme#theme_id}
  */
  readonly themeId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/okta/d/theme okta_theme}
*/
export class DataOktaTheme extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_theme";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/okta/d/theme okta_theme} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOktaThemeConfig
  */
  public constructor(scope: Construct, id: string, config: DataOktaThemeConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_theme',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '3.38.0',
        providerVersionConstraint: '~> 3.20'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._brandId = config.brandId;
    this._themeId = config.themeId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // background_image_url - computed: true, optional: false, required: false
  public get backgroundImageUrl() {
    return this.getStringAttribute('background_image_url');
  }

  // brand_id - computed: false, optional: false, required: true
  private _brandId?: string; 
  public get brandId() {
    return this.getStringAttribute('brand_id');
  }
  public set brandId(value: string) {
    this._brandId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get brandIdInput() {
    return this._brandId;
  }

  // email_template_touch_point_variant - computed: true, optional: false, required: false
  public get emailTemplateTouchPointVariant() {
    return this.getStringAttribute('email_template_touch_point_variant');
  }

  // end_user_dashboard_touch_point_variant - computed: true, optional: false, required: false
  public get endUserDashboardTouchPointVariant() {
    return this.getStringAttribute('end_user_dashboard_touch_point_variant');
  }

  // error_page_touch_point_variant - computed: true, optional: false, required: false
  public get errorPageTouchPointVariant() {
    return this.getStringAttribute('error_page_touch_point_variant');
  }

  // favicon_url - computed: true, optional: false, required: false
  public get faviconUrl() {
    return this.getStringAttribute('favicon_url');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // links - computed: true, optional: false, required: false
  public get links() {
    return this.getStringAttribute('links');
  }

  // logo_url - computed: true, optional: false, required: false
  public get logoUrl() {
    return this.getStringAttribute('logo_url');
  }

  // primary_color_contrast_hex - computed: true, optional: false, required: false
  public get primaryColorContrastHex() {
    return this.getStringAttribute('primary_color_contrast_hex');
  }

  // primary_color_hex - computed: true, optional: false, required: false
  public get primaryColorHex() {
    return this.getStringAttribute('primary_color_hex');
  }

  // secondary_color_contrast_hex - computed: true, optional: false, required: false
  public get secondaryColorContrastHex() {
    return this.getStringAttribute('secondary_color_contrast_hex');
  }

  // secondary_color_hex - computed: true, optional: false, required: false
  public get secondaryColorHex() {
    return this.getStringAttribute('secondary_color_hex');
  }

  // sign_in_page_touch_point_variant - computed: true, optional: false, required: false
  public get signInPageTouchPointVariant() {
    return this.getStringAttribute('sign_in_page_touch_point_variant');
  }

  // theme_id - computed: false, optional: false, required: true
  private _themeId?: string; 
  public get themeId() {
    return this.getStringAttribute('theme_id');
  }
  public set themeId(value: string) {
    this._themeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get themeIdInput() {
    return this._themeId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      brand_id: cdktf.stringToTerraform(this._brandId),
      theme_id: cdktf.stringToTerraform(this._themeId),
    };
  }
}
