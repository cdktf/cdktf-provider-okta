// https://registry.terraform.io/providers/okta/okta/4.4.0/docs/data-sources/themes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOktaThemesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Brand ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/data-sources/themes#brand_id DataOktaThemes#brand_id}
  */
  readonly brandId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/data-sources/themes#id DataOktaThemes#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataOktaThemesThemes {
}

export function dataOktaThemesThemesToTerraform(struct?: DataOktaThemesThemes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataOktaThemesThemesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOktaThemesThemes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOktaThemesThemes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // background_image_url - computed: true, optional: false, required: false
  public get backgroundImageUrl() {
    return this.getStringAttribute('background_image_url');
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
}

export class DataOktaThemesThemesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataOktaThemesThemesOutputReference {
    return new DataOktaThemesThemesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/data-sources/themes okta_themes}
*/
export class DataOktaThemes extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_themes";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/data-sources/themes okta_themes} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOktaThemesConfig
  */
  public constructor(scope: Construct, id: string, config: DataOktaThemesConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_themes',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '4.4.0',
        providerVersionConstraint: '~> 4.0'
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // themes - computed: true, optional: false, required: false
  private _themes = new DataOktaThemesThemesList(this, "themes", true);
  public get themes() {
    return this._themes;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      brand_id: cdktf.stringToTerraform(this._brandId),
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
