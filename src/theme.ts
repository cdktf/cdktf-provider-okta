// https://www.terraform.io/docs/providers/okta/r/theme
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ThemeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Path to local file
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/theme#background_image Theme#background_image}
  */
  readonly backgroundImage?: string;
  /**
  * Brand ID
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/theme#brand_id Theme#brand_id}
  */
  readonly brandId: string;
  /**
  * Variant for email templates (`OKTA_DEFAULT`, `FULL_THEME`)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/theme#email_template_touch_point_variant Theme#email_template_touch_point_variant}
  */
  readonly emailTemplateTouchPointVariant?: string;
  /**
  * Variant for the Okta End-User Dashboard (`OKTA_DEFAULT`, `WHITE_LOGO_BACKGROUND`, `FULL_THEME`, `LOGO_ON_FULL_WHITE_BACKGROUND`)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/theme#end_user_dashboard_touch_point_variant Theme#end_user_dashboard_touch_point_variant}
  */
  readonly endUserDashboardTouchPointVariant?: string;
  /**
  * Variant for the error page (`OKTA_DEFAULT`, `BACKGROUND_SECONDARY_COLOR`, `BACKGROUND_IMAGE`)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/theme#error_page_touch_point_variant Theme#error_page_touch_point_variant}
  */
  readonly errorPageTouchPointVariant?: string;
  /**
  * Path to local file
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/theme#favicon Theme#favicon}
  */
  readonly favicon?: string;
  /**
  * Path to local file
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/theme#logo Theme#logo}
  */
  readonly logo?: string;
  /**
  * Primary color contrast hex code
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/theme#primary_color_contrast_hex Theme#primary_color_contrast_hex}
  */
  readonly primaryColorContrastHex?: string;
  /**
  * Primary color hex code
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/theme#primary_color_hex Theme#primary_color_hex}
  */
  readonly primaryColorHex?: string;
  /**
  * Secondary color contrast hex code
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/theme#secondary_color_contrast_hex Theme#secondary_color_contrast_hex}
  */
  readonly secondaryColorContrastHex?: string;
  /**
  * Secondary color hex code
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/theme#secondary_color_hex Theme#secondary_color_hex}
  */
  readonly secondaryColorHex?: string;
  /**
  * Variant for the Okta Sign-In Page (`OKTA_DEFAULT`, `BACKGROUND_SECONDARY_COLOR`, `BACKGROUND_IMAGE`)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/theme#sign_in_page_touch_point_variant Theme#sign_in_page_touch_point_variant}
  */
  readonly signInPageTouchPointVariant?: string;
  /**
  * Theme ID - Note: Okta API for theme only reads and updates therefore the okta_theme resource needs to act as a quasi data source. Do this by setting theme_id.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/theme#theme_id Theme#theme_id}
  */
  readonly themeId?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/okta/r/theme okta_theme}
*/
export class Theme extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_theme";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/okta/r/theme okta_theme} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ThemeConfig
  */
  public constructor(scope: Construct, id: string, config: ThemeConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_theme',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '3.32.0',
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
    this._backgroundImage = config.backgroundImage;
    this._brandId = config.brandId;
    this._emailTemplateTouchPointVariant = config.emailTemplateTouchPointVariant;
    this._endUserDashboardTouchPointVariant = config.endUserDashboardTouchPointVariant;
    this._errorPageTouchPointVariant = config.errorPageTouchPointVariant;
    this._favicon = config.favicon;
    this._logo = config.logo;
    this._primaryColorContrastHex = config.primaryColorContrastHex;
    this._primaryColorHex = config.primaryColorHex;
    this._secondaryColorContrastHex = config.secondaryColorContrastHex;
    this._secondaryColorHex = config.secondaryColorHex;
    this._signInPageTouchPointVariant = config.signInPageTouchPointVariant;
    this._themeId = config.themeId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // background_image - computed: false, optional: true, required: false
  private _backgroundImage?: string; 
  public get backgroundImage() {
    return this.getStringAttribute('background_image');
  }
  public set backgroundImage(value: string) {
    this._backgroundImage = value;
  }
  public resetBackgroundImage() {
    this._backgroundImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundImageInput() {
    return this._backgroundImage;
  }

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

  // email_template_touch_point_variant - computed: false, optional: true, required: false
  private _emailTemplateTouchPointVariant?: string; 
  public get emailTemplateTouchPointVariant() {
    return this.getStringAttribute('email_template_touch_point_variant');
  }
  public set emailTemplateTouchPointVariant(value: string) {
    this._emailTemplateTouchPointVariant = value;
  }
  public resetEmailTemplateTouchPointVariant() {
    this._emailTemplateTouchPointVariant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailTemplateTouchPointVariantInput() {
    return this._emailTemplateTouchPointVariant;
  }

  // end_user_dashboard_touch_point_variant - computed: false, optional: true, required: false
  private _endUserDashboardTouchPointVariant?: string; 
  public get endUserDashboardTouchPointVariant() {
    return this.getStringAttribute('end_user_dashboard_touch_point_variant');
  }
  public set endUserDashboardTouchPointVariant(value: string) {
    this._endUserDashboardTouchPointVariant = value;
  }
  public resetEndUserDashboardTouchPointVariant() {
    this._endUserDashboardTouchPointVariant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endUserDashboardTouchPointVariantInput() {
    return this._endUserDashboardTouchPointVariant;
  }

  // error_page_touch_point_variant - computed: false, optional: true, required: false
  private _errorPageTouchPointVariant?: string; 
  public get errorPageTouchPointVariant() {
    return this.getStringAttribute('error_page_touch_point_variant');
  }
  public set errorPageTouchPointVariant(value: string) {
    this._errorPageTouchPointVariant = value;
  }
  public resetErrorPageTouchPointVariant() {
    this._errorPageTouchPointVariant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorPageTouchPointVariantInput() {
    return this._errorPageTouchPointVariant;
  }

  // favicon - computed: false, optional: true, required: false
  private _favicon?: string; 
  public get favicon() {
    return this.getStringAttribute('favicon');
  }
  public set favicon(value: string) {
    this._favicon = value;
  }
  public resetFavicon() {
    this._favicon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faviconInput() {
    return this._favicon;
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

  // logo - computed: false, optional: true, required: false
  private _logo?: string; 
  public get logo() {
    return this.getStringAttribute('logo');
  }
  public set logo(value: string) {
    this._logo = value;
  }
  public resetLogo() {
    this._logo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoInput() {
    return this._logo;
  }

  // logo_url - computed: true, optional: false, required: false
  public get logoUrl() {
    return this.getStringAttribute('logo_url');
  }

  // primary_color_contrast_hex - computed: false, optional: true, required: false
  private _primaryColorContrastHex?: string; 
  public get primaryColorContrastHex() {
    return this.getStringAttribute('primary_color_contrast_hex');
  }
  public set primaryColorContrastHex(value: string) {
    this._primaryColorContrastHex = value;
  }
  public resetPrimaryColorContrastHex() {
    this._primaryColorContrastHex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryColorContrastHexInput() {
    return this._primaryColorContrastHex;
  }

  // primary_color_hex - computed: false, optional: true, required: false
  private _primaryColorHex?: string; 
  public get primaryColorHex() {
    return this.getStringAttribute('primary_color_hex');
  }
  public set primaryColorHex(value: string) {
    this._primaryColorHex = value;
  }
  public resetPrimaryColorHex() {
    this._primaryColorHex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryColorHexInput() {
    return this._primaryColorHex;
  }

  // secondary_color_contrast_hex - computed: false, optional: true, required: false
  private _secondaryColorContrastHex?: string; 
  public get secondaryColorContrastHex() {
    return this.getStringAttribute('secondary_color_contrast_hex');
  }
  public set secondaryColorContrastHex(value: string) {
    this._secondaryColorContrastHex = value;
  }
  public resetSecondaryColorContrastHex() {
    this._secondaryColorContrastHex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryColorContrastHexInput() {
    return this._secondaryColorContrastHex;
  }

  // secondary_color_hex - computed: false, optional: true, required: false
  private _secondaryColorHex?: string; 
  public get secondaryColorHex() {
    return this.getStringAttribute('secondary_color_hex');
  }
  public set secondaryColorHex(value: string) {
    this._secondaryColorHex = value;
  }
  public resetSecondaryColorHex() {
    this._secondaryColorHex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryColorHexInput() {
    return this._secondaryColorHex;
  }

  // sign_in_page_touch_point_variant - computed: false, optional: true, required: false
  private _signInPageTouchPointVariant?: string; 
  public get signInPageTouchPointVariant() {
    return this.getStringAttribute('sign_in_page_touch_point_variant');
  }
  public set signInPageTouchPointVariant(value: string) {
    this._signInPageTouchPointVariant = value;
  }
  public resetSignInPageTouchPointVariant() {
    this._signInPageTouchPointVariant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signInPageTouchPointVariantInput() {
    return this._signInPageTouchPointVariant;
  }

  // theme_id - computed: false, optional: true, required: false
  private _themeId?: string; 
  public get themeId() {
    return this.getStringAttribute('theme_id');
  }
  public set themeId(value: string) {
    this._themeId = value;
  }
  public resetThemeId() {
    this._themeId = undefined;
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
      background_image: cdktf.stringToTerraform(this._backgroundImage),
      brand_id: cdktf.stringToTerraform(this._brandId),
      email_template_touch_point_variant: cdktf.stringToTerraform(this._emailTemplateTouchPointVariant),
      end_user_dashboard_touch_point_variant: cdktf.stringToTerraform(this._endUserDashboardTouchPointVariant),
      error_page_touch_point_variant: cdktf.stringToTerraform(this._errorPageTouchPointVariant),
      favicon: cdktf.stringToTerraform(this._favicon),
      logo: cdktf.stringToTerraform(this._logo),
      primary_color_contrast_hex: cdktf.stringToTerraform(this._primaryColorContrastHex),
      primary_color_hex: cdktf.stringToTerraform(this._primaryColorHex),
      secondary_color_contrast_hex: cdktf.stringToTerraform(this._secondaryColorContrastHex),
      secondary_color_hex: cdktf.stringToTerraform(this._secondaryColorHex),
      sign_in_page_touch_point_variant: cdktf.stringToTerraform(this._signInPageTouchPointVariant),
      theme_id: cdktf.stringToTerraform(this._themeId),
    };
  }
}