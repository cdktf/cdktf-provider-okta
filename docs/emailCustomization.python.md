# `okta_email_customization`

Refer to the Terraform Registory for docs: [`okta_email_customization`](https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/email_customization).

# `emailCustomization` Submodule <a name="`emailCustomization` Submodule" id="@cdktf/provider-okta.emailCustomization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EmailCustomization <a name="EmailCustomization" id="@cdktf/provider-okta.emailCustomization.EmailCustomization"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/email_customization okta_email_customization}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import email_customization

emailCustomization.EmailCustomization(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  brand_id: str,
  template_name: str,
  body: str = None,
  force_is_default: str = None,
  is_default: typing.Union[bool, IResolvable] = None,
  language: str = None,
  subject: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.Initializer.parameter.brandId">brand_id</a></code> | <code>str</code> | Brand ID. |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.Initializer.parameter.templateName">template_name</a></code> | <code>str</code> | Template Name. |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.Initializer.parameter.body">body</a></code> | <code>str</code> | The body of the customization. |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.Initializer.parameter.forceIsDefault">force_is_default</a></code> | <code>str</code> | Force is_default on the create and delete by deleting all email customizations. |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.Initializer.parameter.isDefault">is_default</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the customization is the default. |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.Initializer.parameter.language">language</a></code> | <code>str</code> | The language supported by the customization. |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.Initializer.parameter.subject">subject</a></code> | <code>str</code> | The subject of the customization. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `brand_id`<sup>Required</sup> <a name="brand_id" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.Initializer.parameter.brandId"></a>

- *Type:* str

Brand ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/email_customization#brand_id EmailCustomization#brand_id}

---

##### `template_name`<sup>Required</sup> <a name="template_name" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.Initializer.parameter.templateName"></a>

- *Type:* str

Template Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/email_customization#template_name EmailCustomization#template_name}

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.Initializer.parameter.body"></a>

- *Type:* str

The body of the customization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/email_customization#body EmailCustomization#body}

---

##### `force_is_default`<sup>Optional</sup> <a name="force_is_default" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.Initializer.parameter.forceIsDefault"></a>

- *Type:* str

Force is_default on the create and delete by deleting all email customizations.

Comma separated string with values of 'create' or 'destroy' or both `create,destroy'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/email_customization#force_is_default EmailCustomization#force_is_default}

---

##### `is_default`<sup>Optional</sup> <a name="is_default" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.Initializer.parameter.isDefault"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the customization is the default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/email_customization#is_default EmailCustomization#is_default}

---

##### `language`<sup>Optional</sup> <a name="language" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.Initializer.parameter.language"></a>

- *Type:* str

The language supported by the customization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/email_customization#language EmailCustomization#language}

---

##### `subject`<sup>Optional</sup> <a name="subject" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.Initializer.parameter.subject"></a>

- *Type:* str

The subject of the customization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/email_customization#subject EmailCustomization#subject}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.resetBody">reset_body</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.resetForceIsDefault">reset_force_is_default</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.resetIsDefault">reset_is_default</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.resetLanguage">reset_language</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.resetSubject">reset_subject</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_body` <a name="reset_body" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.resetBody"></a>

```python
def reset_body() -> None
```

##### `reset_force_is_default` <a name="reset_force_is_default" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.resetForceIsDefault"></a>

```python
def reset_force_is_default() -> None
```

##### `reset_is_default` <a name="reset_is_default" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.resetIsDefault"></a>

```python
def reset_is_default() -> None
```

##### `reset_language` <a name="reset_language" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.resetLanguage"></a>

```python
def reset_language() -> None
```

##### `reset_subject` <a name="reset_subject" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.resetSubject"></a>

```python
def reset_subject() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.isConstruct"></a>

```python
from cdktf_cdktf_provider_okta import email_customization

emailCustomization.EmailCustomization.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_okta import email_customization

emailCustomization.EmailCustomization.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_okta import email_customization

emailCustomization.EmailCustomization.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.links">links</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.bodyInput">body_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.brandIdInput">brand_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.forceIsDefaultInput">force_is_default_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.isDefaultInput">is_default_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.languageInput">language_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.subjectInput">subject_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.templateNameInput">template_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.body">body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.brandId">brand_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.forceIsDefault">force_is_default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.isDefault">is_default</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.language">language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.subject">subject</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.templateName">template_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `links`<sup>Required</sup> <a name="links" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.links"></a>

```python
links: str
```

- *Type:* str

---

##### `body_input`<sup>Optional</sup> <a name="body_input" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.bodyInput"></a>

```python
body_input: str
```

- *Type:* str

---

##### `brand_id_input`<sup>Optional</sup> <a name="brand_id_input" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.brandIdInput"></a>

```python
brand_id_input: str
```

- *Type:* str

---

##### `force_is_default_input`<sup>Optional</sup> <a name="force_is_default_input" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.forceIsDefaultInput"></a>

```python
force_is_default_input: str
```

- *Type:* str

---

##### `is_default_input`<sup>Optional</sup> <a name="is_default_input" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.isDefaultInput"></a>

```python
is_default_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `language_input`<sup>Optional</sup> <a name="language_input" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.languageInput"></a>

```python
language_input: str
```

- *Type:* str

---

##### `subject_input`<sup>Optional</sup> <a name="subject_input" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.subjectInput"></a>

```python
subject_input: str
```

- *Type:* str

---

##### `template_name_input`<sup>Optional</sup> <a name="template_name_input" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.templateNameInput"></a>

```python
template_name_input: str
```

- *Type:* str

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.body"></a>

```python
body: str
```

- *Type:* str

---

##### `brand_id`<sup>Required</sup> <a name="brand_id" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.brandId"></a>

```python
brand_id: str
```

- *Type:* str

---

##### `force_is_default`<sup>Required</sup> <a name="force_is_default" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.forceIsDefault"></a>

```python
force_is_default: str
```

- *Type:* str

---

##### `is_default`<sup>Required</sup> <a name="is_default" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.isDefault"></a>

```python
is_default: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `language`<sup>Required</sup> <a name="language" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.language"></a>

```python
language: str
```

- *Type:* str

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.subject"></a>

```python
subject: str
```

- *Type:* str

---

##### `template_name`<sup>Required</sup> <a name="template_name" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.templateName"></a>

```python
template_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EmailCustomizationConfig <a name="EmailCustomizationConfig" id="@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import email_customization

emailCustomization.EmailCustomizationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  brand_id: str,
  template_name: str,
  body: str = None,
  force_is_default: str = None,
  is_default: typing.Union[bool, IResolvable] = None,
  language: str = None,
  subject: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.brandId">brand_id</a></code> | <code>str</code> | Brand ID. |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.templateName">template_name</a></code> | <code>str</code> | Template Name. |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.body">body</a></code> | <code>str</code> | The body of the customization. |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.forceIsDefault">force_is_default</a></code> | <code>str</code> | Force is_default on the create and delete by deleting all email customizations. |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.isDefault">is_default</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the customization is the default. |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.language">language</a></code> | <code>str</code> | The language supported by the customization. |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.subject">subject</a></code> | <code>str</code> | The subject of the customization. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `brand_id`<sup>Required</sup> <a name="brand_id" id="@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.brandId"></a>

```python
brand_id: str
```

- *Type:* str

Brand ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/email_customization#brand_id EmailCustomization#brand_id}

---

##### `template_name`<sup>Required</sup> <a name="template_name" id="@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.templateName"></a>

```python
template_name: str
```

- *Type:* str

Template Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/email_customization#template_name EmailCustomization#template_name}

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.body"></a>

```python
body: str
```

- *Type:* str

The body of the customization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/email_customization#body EmailCustomization#body}

---

##### `force_is_default`<sup>Optional</sup> <a name="force_is_default" id="@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.forceIsDefault"></a>

```python
force_is_default: str
```

- *Type:* str

Force is_default on the create and delete by deleting all email customizations.

Comma separated string with values of 'create' or 'destroy' or both `create,destroy'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/email_customization#force_is_default EmailCustomization#force_is_default}

---

##### `is_default`<sup>Optional</sup> <a name="is_default" id="@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.isDefault"></a>

```python
is_default: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the customization is the default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/email_customization#is_default EmailCustomization#is_default}

---

##### `language`<sup>Optional</sup> <a name="language" id="@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.language"></a>

```python
language: str
```

- *Type:* str

The language supported by the customization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/email_customization#language EmailCustomization#language}

---

##### `subject`<sup>Optional</sup> <a name="subject" id="@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.subject"></a>

```python
subject: str
```

- *Type:* str

The subject of the customization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/email_customization#subject EmailCustomization#subject}

---



